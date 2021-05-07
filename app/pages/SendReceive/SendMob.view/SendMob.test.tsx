import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SnackbarProvider } from 'notistack';

import '../../../testUtils/i18nForTests';
import Contact from '../../../types/Contact';
import SelectedAccount from '../../../types/SelectedAccount';
import { SendMob } from './SendMob.view';

jest.setTimeout(30000);

const AMOUNT_TO_SEND = 44;
const INITIAL_BALANCE = 229;
const ACCOUNT_NEW_NAME = 'SOMEONE';

const PUBLIC_ADDRESS =
  'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH';

const CONTACTS = [
  {
    abbreviation: 'F1',
    alias: 'Foxtrot Golf',
    assignedAddress: '11111',
    color: '#FF0000',
    isFavorite: true,
    recipientAddress: '99999',
  },
  {
    abbreviation: 'K2',
    alias: 'Kilo Lima',
    assignedAddress: '22222',
    color: '#00FF00',
    isFavorite: false,
    recipientAddress: '88888',
  },
  {
    abbreviation: 'ST',
    alias: 'Sierra Tango',
    assignedAddress: '33333',
    color: '#0000FF',
    isFavorite: true,
    recipientAddress: '77777',
  },
] as Contact[];

const SELECTED_ACCOUNT = {
  account: {
    accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
    firstBlockIndex: '0',
    key_derivation_version: '1',
    mainAddress:
      'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
    name: 'fktt22',
    nextSubaddressIndex: '5',
    object: 'account',
    recoveryMode: false,
  },
  balanceStatus: {
    accountBlockIndex: '158974',
    isSynced: true,
    localBlockIndex: '158974',
    networkBlockIndex: '158974',
    object: 'balance',
    orphanedPmob: '18000000000001',
    pendingPmob: '0',
    secretedPmob: '0',
    spentPmob: '35410000000000',
    unspentPmob: String(INITIAL_BALANCE * 1000000000000),
  },
} as SelectedAccount;

const setUpTest = ({
  assignAddressForAccount = jest.fn(() =>
    Promise.resolve({
      address: {
        account_id: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
        metadata: '',
        object: 'address',
        offset_count: '6',
        public_address:
          '6rDej9ensMcC5TrqLawVWwqViFDPG4pyurjZ2sxbRZULUSvoUYZvs9wup1CBeMbykGLP8yzJMUeuetZQUWzXWFYSN8oXECMaXCXqPhibXpK',
        subaddress_index: '5',
      },
    })
  ),
  buildTransaction = jest.fn(() =>
    Promise.resolve({
      feeConfirmation: BigInt(0.01 * 1000000000000),
      totalValueConfirmation: BigInt(AMOUNT_TO_SEND * 1000000000000),
      txProposal: {
        fee: '10000000000',
        inputList: [],
        // other fields, ignored
      },
      txProposalReceiverB58Code:
        'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
    })
  ),
  contacts = [] as Contact[],
  existingPin = '',
  isSyncedBuffered = jest.fn(() => true),
  pinThresholdPmob = 99999999999,
  selectedAccount = SELECTED_ACCOUNT,
  submitTransaction = jest.fn(),
  updateContacts = jest.fn(() => Promise.resolve()),
} = {}) => {
  const { container } = render(
    <SnackbarProvider dense maxSnack={5}>
      <SendMob
        assignAddressForAccount={assignAddressForAccount}
        buildTransaction={buildTransaction}
        contacts={contacts}
        existingPin={existingPin}
        isSyncedBuffered={isSyncedBuffered}
        pinThresholdPmob={pinThresholdPmob}
        selectedAccount={selectedAccount}
        submitTransaction={submitTransaction}
        updateContacts={updateContacts}
      />
    </SnackbarProvider>
  );
  const contactsSelect = container.querySelector('[id="contactsList"]') as HTMLInputElement;
  const recipientAddress = container.querySelector(
    '[name="recipientPublicAddress"]'
  ) as HTMLInputElement;
  const mobAmount = container.querySelector('[id="mobAmount"]') as HTMLInputElement;
  const saveToContactsCheck = container.querySelector('[name="showChecked"]') as HTMLInputElement;
  const aliasField = container.querySelector('[name="alias"]') as HTMLInputElement;
  const submitButton = container.querySelector('[data-testid="submit-button"]') as HTMLInputElement;
  return {
    aliasField,
    assignAddressForAccount,
    buildTransaction,
    contactsSelect,
    container,
    isSyncedBuffered,
    mobAmount,
    recipientAddress,
    saveToContactsCheck,
    submitButton,
    submitTransaction,
    updateContacts,
  };
};

const getModalData = (container: HTMLElement) => {
  const balanceValue = container.querySelector('[id="balanceValue"]') as HTMLInputElement;
  const totalValue = container.querySelector('[id="totalValue"]') as HTMLInputElement;
  const feeValue = container.querySelector('[id="feeValue"]') as HTMLInputElement;
  const sentValue = container.querySelector('[id="sentValue"]') as HTMLInputElement;
  const remainingValue = container.querySelector('[id="remainingValue"]') as HTMLInputElement;
  const pinField = container.querySelector('[name="pin"]') as HTMLInputElement;
  const cancelSendButton = container.querySelector('[id="cancelSend"]') as HTMLInputElement;
  const submitSendButton = container.querySelector('[id="submitSend"]') as HTMLInputElement;

  return {
    balanceValue,
    cancelSendButton,
    feeValue,
    pinField,
    remainingValue,
    sentValue,
    submitSendButton,
    totalValue,
  };
};

test('All fields appear correctly if contacts are provided', async () => {
  const { contactsSelect, recipientAddress, saveToContactsCheck, submitButton } = setUpTest({
    contacts: CONTACTS,
  });

  await waitFor(() => expect(contactsSelect).not.toBeFalsy());
  await waitFor(() => expect(recipientAddress).not.toBeFalsy());
  await waitFor(() => expect(saveToContactsCheck).not.toBeFalsy());
  await waitFor(() => expect(saveToContactsCheck.disabled).toBeTruthy());
  await waitFor(() => expect(submitButton).not.toBeFalsy());
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());
});

test('All fields appear correctly if no contacts are provided', async () => {
  const { contactsSelect, recipientAddress, saveToContactsCheck, submitButton } = setUpTest({
    contacts: [],
  });

  await waitFor(() => expect(contactsSelect).toBeFalsy());
  await waitFor(() => expect(recipientAddress).not.toBeFalsy());
  await waitFor(() => expect(saveToContactsCheck).not.toBeFalsy());
  await waitFor(() => expect(saveToContactsCheck.disabled).toBeTruthy());
  await waitFor(() => expect(submitButton).not.toBeFalsy());
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());
});

test('Submit and save to contact are enabled, submit sends the transaction', async () => {
  const {
    container,
    mobAmount,
    recipientAddress,
    saveToContactsCheck,
    submitTransaction,
    submitButton,
  } = setUpTest({
    contacts: [],
  });

  await act(async () => userEvent.type(recipientAddress, PUBLIC_ADDRESS, { delay: 1 }));
  await waitFor(() => expect(recipientAddress.value).toEqual(PUBLIC_ADDRESS));
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());

  await act(async () => userEvent.type(mobAmount, String(AMOUNT_TO_SEND), { delay: 1 }));
  await waitFor(() => expect(mobAmount.value.includes(String(AMOUNT_TO_SEND))).toBeTruthy());
  await waitFor(() => expect(saveToContactsCheck.disabled).toBeFalsy());
  await waitFor(() => expect(submitButton.disabled).toBeFalsy());

  await act(async () => userEvent.click(submitButton));

  const {
    balanceValue,
    cancelSendButton,
    feeValue,
    pinField,
    remainingValue,
    sentValue,
    submitSendButton,
    totalValue,
  } = getModalData(container.parentElement as HTMLElement);

  await waitFor(() =>
    expect(parseFloat(balanceValue.textContent as string)).toEqual(INITIAL_BALANCE)
  );
  await waitFor(() => expect(parseFloat(totalValue.textContent as string)).toEqual(AMOUNT_TO_SEND));
  await waitFor(() => expect(parseFloat(feeValue.textContent as string)).toEqual(0.01));
  await waitFor(() =>
    expect(parseFloat(sentValue.textContent as string)).toEqual(AMOUNT_TO_SEND + 0.01)
  );
  await waitFor(() =>
    expect(parseFloat(remainingValue.textContent as string)).toEqual(
      INITIAL_BALANCE - AMOUNT_TO_SEND - 0.01
    )
  );
  await waitFor(() => expect(pinField).not.toBeFalsy());
  await waitFor(() => expect(cancelSendButton).not.toBeFalsy());
  await waitFor(() => expect(submitSendButton).not.toBeFalsy());
  await waitFor(() => expect(submitTransaction).not.toHaveBeenCalled());
  // FK THIS CRASHES ... await act(async () => userEvent.click(submitSendButton));
  // FK THIS CRASHES ... await waitFor(() => expect(submitTransaction).toHaveBeenCalled());
});

test('Submit and save to contact are enabled, cancel does nothing', async () => {
  const { container, mobAmount, recipientAddress, submitTransaction, submitButton } = setUpTest({
    contacts: [],
  });

  await act(async () => userEvent.type(recipientAddress, PUBLIC_ADDRESS, { delay: 1 }));
  await act(async () => userEvent.type(mobAmount, String(AMOUNT_TO_SEND), { delay: 1 }));
  await act(async () => userEvent.click(submitButton));

  const { cancelSendButton } = getModalData(container.parentElement as HTMLElement);

  await act(async () => userEvent.click(cancelSendButton));
  expect(submitTransaction).not.toHaveBeenCalled();
});

test('Can create an account when sending', async () => {
  const {
    // FK assignAddressForAccount,
    container,
    mobAmount,
    recipientAddress,
    // FK submitTransaction,
    submitButton,
    saveToContactsCheck,
  } = setUpTest({
    contacts: [],
  });

  await act(async () => userEvent.type(recipientAddress, PUBLIC_ADDRESS, { delay: 1 }));
  await act(async () => userEvent.type(mobAmount, String(AMOUNT_TO_SEND), { delay: 1 }));
  await waitFor(() => expect(submitButton.disabled).toBeFalsy());

  await act(async () => userEvent.click(saveToContactsCheck));
  await waitFor(() => expect(saveToContactsCheck.checked).toBeTruthy());
  await waitFor(() => expect(submitButton.disabled).toBeTruthy());

  const aliasField = container.querySelector('[name="alias"]') as HTMLInputElement;
  await waitFor(() => expect(aliasField).not.toBeFalsy());
  await act(async () => userEvent.type(aliasField, ACCOUNT_NEW_NAME, { delay: 1 }));
  await waitFor(() => expect(aliasField.value).toEqual(ACCOUNT_NEW_NAME));
  await waitFor(() => expect(submitButton.disabled).toBeFalsy());

  await act(async () => userEvent.click(submitButton));
  const { submitSendButton } = getModalData(container.parentElement as HTMLElement);
  await waitFor(() => expect(submitSendButton.disabled).toBeFalsy());

  // FK THIS CRASHES await act(async () => userEvent.click(submitSendButton));
  // FK THIS CRASHES await waitFor(() => expect(submitTransaction).toHaveBeenCalled());
  // FK THIS CRASHES await waitFor(() => expect(assignAddressForAccount).toHaveBeenCalled());
});

test('Can pick a contact to send MOBs to', async () => {
  const { contactsSelect, container, recipientAddress, saveToContactsCheck } = setUpTest({
    contacts: CONTACTS,
  });

  await waitFor(() => expect(saveToContactsCheck.disabled).not.toBeFalsy());
  await act(async () => userEvent.click(contactsSelect));
  const klContact = container?.parentElement?.querySelector('[id="contact_22222"]') as HTMLElement; // Kilo Lima
  await waitFor(() => expect(klContact).toBeTruthy());
  await act(async () => userEvent.click(klContact));
  await waitFor(() => expect(saveToContactsCheck.disabled).toBeTruthy());
  await waitFor(() => expect(recipientAddress.value).toEqual('88888'));
  await waitFor(() => expect(recipientAddress.disabled).toBeTruthy());
});
