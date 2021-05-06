import React from 'react';

import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SnackbarProvider } from 'notistack';

import '../../../testUtils/i18nForTests';
import Contact from '../../../types/Contact';
import SelectedAccount from '../../../types/SelectedAccount';
import { SendMob } from './SendMob.view';

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
  },
  {
    abbreviation: 'K2',
    alias: 'Kilo Lima',
    assignedAddress: '22222',
    color: '#00FF00',
    isFavorite: false,
  },
  {
    abbreviation: 'ST',
    alias: 'Sierra Tango',
    assignedAddress: '33333',
    color: '#0000FF',
    isFavorite: true,
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
  updateContacts = jest.fn(),
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
  const contactsSelect = container.querySelector('[id="contactsList"]');
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

test('All fields appear correctly if contacts are provided', () => {
  const { contactsSelect, recipientAddress, saveToContactsCheck, submitButton } = setUpTest({
    contacts: CONTACTS,
  });

  expect(contactsSelect).not.toBeFalsy();
  expect(recipientAddress).not.toBeFalsy();
  expect(saveToContactsCheck).not.toBeFalsy();
  expect(saveToContactsCheck.disabled).toBeTruthy();
  expect(submitButton).not.toBeFalsy();
  expect(submitButton.disabled).toBeTruthy();
});

test('All fields appear correctly if no contacts are provided', () => {
  const { contactsSelect, recipientAddress, saveToContactsCheck, submitButton } = setUpTest({
    contacts: [],
  });

  expect(contactsSelect).toBeFalsy();
  expect(recipientAddress).not.toBeFalsy();
  expect(saveToContactsCheck).not.toBeFalsy();
  expect(saveToContactsCheck.disabled).toBeTruthy();
  expect(submitButton).not.toBeFalsy();
  expect(submitButton.disabled).toBeTruthy();
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
  expect(recipientAddress.value).toEqual(PUBLIC_ADDRESS);
  expect(submitButton.disabled).toBeTruthy();

  await act(async () => userEvent.type(mobAmount, String(AMOUNT_TO_SEND), { delay: 1 }));
  expect(mobAmount.value.includes(String(AMOUNT_TO_SEND))).toBeTruthy();
  expect(saveToContactsCheck.disabled).toBeFalsy();
  expect(submitButton.disabled).toBeFalsy();

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

  expect(parseFloat(balanceValue.textContent as string)).toEqual(INITIAL_BALANCE);
  expect(parseFloat(totalValue.textContent as string)).toEqual(AMOUNT_TO_SEND);
  expect(parseFloat(feeValue.textContent as string)).toEqual(0.01);
  expect(parseFloat(sentValue.textContent as string)).toEqual(AMOUNT_TO_SEND + 0.01);
  expect(parseFloat(remainingValue.textContent as string)).toEqual(
    INITIAL_BALANCE - AMOUNT_TO_SEND - 0.01
  );
  expect(pinField).not.toBeFalsy();
  expect(cancelSendButton).not.toBeFalsy();
  expect(submitSendButton).not.toBeFalsy();

  await act(async () => userEvent.click(submitSendButton));
  expect(submitTransaction).toHaveBeenCalled();
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
    assignAddressForAccount,
    container,
    mobAmount,
    recipientAddress,
    submitTransaction,
    submitButton,
    saveToContactsCheck,
  } = setUpTest({
    contacts: [],
  });

  await act(async () => userEvent.type(recipientAddress, PUBLIC_ADDRESS, { delay: 1 }));
  await act(async () => userEvent.type(mobAmount, String(AMOUNT_TO_SEND), { delay: 1 }));
  expect(submitButton.disabled).toBeFalsy();

  await act(async () => userEvent.click(saveToContactsCheck));
  expect(saveToContactsCheck.checked).toBeTruthy();
  expect(submitButton.disabled).toBeTruthy();

  const aliasField = container.querySelector('[name="alias"]') as HTMLInputElement;
  expect(aliasField).not.toBeFalsy();
  await act(async () => userEvent.type(aliasField, ACCOUNT_NEW_NAME, { delay: 1 }));
  expect(aliasField.value).toEqual(ACCOUNT_NEW_NAME);
  expect(submitButton.disabled).toBeFalsy();

  await act(async () => userEvent.click(submitButton));
  const { submitSendButton } = getModalData(container.parentElement as HTMLElement);
  expect(submitSendButton.disabled).toBeFalsy();

  await act(async () => userEvent.click(submitSendButton));
  expect(submitTransaction).toHaveBeenCalled();
  expect(assignAddressForAccount).toHaveBeenCalled();
});
