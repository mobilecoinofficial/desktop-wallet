import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import '../../../testUtils/i18nForTests';
import { createStore } from 'redux';

import { TOKENS } from '../../../constants/tokens';
import { initialReduxStoreState, reducer } from '../../../redux/reducers/reducers';
import type { Contact } from '../../../types/Contact';
import type { SelectedAccount } from '../../../types/SelectedAccount';
import { SendMob } from './SendMob.view';

jest.setTimeout(30000);

const AMOUNT_TO_SEND = 44;
const INITIAL_BALANCE = 150;
const ACCOUNT_NEW_NAME = 'SOMEONE';

const PUBLIC_ADDRESS =
  'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH';

const CONTACTS = [
  {
    abbreviation: 'F1',
    alias: 'Foxtrot Golf',
    assignedAddress: '11111',
    color: '#FF0000',
    id: 'abd',
    isFavorite: true,
    recipientAddress: '99999',
  },
  {
    abbreviation: 'K2',
    alias: 'Kilo Lima',
    assignedAddress: '22222',
    color: '#00FF00',
    id: 'abdc',
    isFavorite: false,
    recipientAddress: '88888',
  },
  {
    abbreviation: 'ST',
    alias: 'Sierra Tango',
    assignedAddress: '33333',
    color: '#0000FF',
    id: 'abdaa',
    isFavorite: true,
    recipientAddress: '77777',
  },
] as Contact[];

const SELECTED_ACCOUNT = {
  account: {
    accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
    firstBlockIndex: '0',
    keyDerivationVersion: '1',
    mainAddress:
      'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
    name: 'fktt22',
    nextSubaddressIndex: '5',
    object: 'account',
    recoveryMode: false,
  },
  balanceStatus: {
    accountBlockHeight: '158974',
    balancePerToken: {
      [TOKENS.MOB.id]: {
        orphanedPmob: '18000000000001',
        pendingPmob: '0',
        secretedPmob: '0',
        spentPmob: '35410000000000',
        unspentPmob: String(INITIAL_BALANCE * 1000000000000),
      },
      [TOKENS.EUSD.id]: {
        orphanedPmob: '18000000000001',
        pendingPmob: '0',
        secretedPmob: '0',
        spentPmob: '35410000000000',
        unspentPmob: String(INITIAL_BALANCE * 1000000000000),
      },
    },
    isSynced: true,
    localBlockHeight: '158974',
    networkBlockHeight: '158974',
    object: 'balance',
  },
} as SelectedAccount;

const store = createStore(reducer, {
  ...initialReduxStoreState,
  fees: {
    [TOKENS.MOB.id]: '1000000000',
  },
});

const setUpTest = ({
  confirmation = {
    feeConfirmation: BigInt(0.01 * 1000000000000),
    totalValueConfirmation: BigInt(AMOUNT_TO_SEND * 1000000000000),
    txProposal: {
      fee: '10000000000',
      inputList: [],
      // other fields, ignored
    },
    txProposalReceiverB58Code:
      'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
  },
  contacts = [] as Contact[],

  existingPin = '',
  isSynced = true,
  onClickCancel = jest.fn(),
  onClickConfirm = jest.fn(),
  onClickSend = jest.fn(),
  pinThresholdPmob = 99999999999,
  selectedAccount = SELECTED_ACCOUNT,
  showing = 0,
} = {}) => {
  const { container } = render(
    <Provider store={store}>
      <SnackbarProvider dense maxSnack={5}>
        <SendMob
          confirmation={confirmation}
          contacts={contacts}
          existingPin={existingPin}
          isSynced={isSynced}
          onClickCancel={onClickCancel}
          onClickConfirm={onClickConfirm}
          onClickSend={onClickSend}
          pinThresholdPmob={pinThresholdPmob}
          selectedAccount={selectedAccount}
          showing={showing}
        />
      </SnackbarProvider>
    </Provider>
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
    confirmation,
    contactsSelect,
    container,
    isSynced,
    mobAmount,
    onClickCancel,
    onClickConfirm,
    onClickSend,
    recipientAddress,
    saveToContactsCheck,
    submitButton,
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

describe('Send Mob', () => {
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
    const { mobAmount, onClickSend, recipientAddress, saveToContactsCheck, submitButton } =
      setUpTest({
        contacts: [],
        showing: 0,
      });

    await act(async () => userEvent.type(recipientAddress, PUBLIC_ADDRESS, { delay: 1 }));
    await waitFor(() => expect(recipientAddress.value).toEqual(PUBLIC_ADDRESS));
    await waitFor(() => expect(submitButton.disabled).toBeTruthy());

    await act(async () => userEvent.click(mobAmount));
    await act(async () => userEvent.type(mobAmount, String(AMOUNT_TO_SEND), { delay: 1 }));
    await waitFor(() => expect(mobAmount.value.includes(String(AMOUNT_TO_SEND))).toBeTruthy());
    await waitFor(() => expect(saveToContactsCheck.disabled).toBeFalsy());
    await waitFor(() => expect(submitButton.disabled).toBeFalsy());

    await act(async () => userEvent.click(submitButton));
    await waitFor(() => expect(onClickSend).toHaveBeenCalled());
  });

  test('Submit and save to contact are enabled, cancel does nothing', async () => {
    const { container, onClickCancel } = setUpTest({
      contacts: [],
      showing: 1,
    });

    const { cancelSendButton } = getModalData(container.parentElement as HTMLElement);
    await act(async () => userEvent.click(cancelSendButton));
    expect(onClickCancel).toHaveBeenCalled();
  });

  test('Can create an account when sending', async () => {
    const {
      container,
      mobAmount,
      onClickSend,
      recipientAddress,
      submitButton,
      saveToContactsCheck,
    } = setUpTest({
      contacts: [],
      showing: 0,
    });

    await act(async () => userEvent.click(recipientAddress));
    await act(async () => userEvent.type(recipientAddress, PUBLIC_ADDRESS, { delay: 1 }));
    await act(async () => userEvent.click(mobAmount));
    await act(async () => userEvent.type(mobAmount, String(AMOUNT_TO_SEND), { delay: 1 }));
    await waitFor(() => expect(submitButton.disabled).toBeFalsy());

    await act(async () => userEvent.click(saveToContactsCheck));
    await waitFor(() => expect(saveToContactsCheck.checked).toBeTruthy());
    await waitFor(() => expect(submitButton.disabled).toBeTruthy());

    const aliasField = container.querySelector('[name="alias"]') as HTMLInputElement;
    await waitFor(() => expect(aliasField).not.toBeFalsy());
    await act(async () => userEvent.click(aliasField));
    await act(async () => userEvent.type(aliasField, ACCOUNT_NEW_NAME, { delay: 1 }));
    await waitFor(() => expect(aliasField.value).toEqual(ACCOUNT_NEW_NAME));
    await waitFor(() => expect(submitButton.disabled).toBeFalsy());

    await act(async () => userEvent.click(submitButton));
    await waitFor(() => expect(onClickSend).toHaveBeenCalled());
  });

  test('Can pick a contact to send MOBs to', async () => {
    const { contactsSelect, container, recipientAddress, saveToContactsCheck } = setUpTest({
      contacts: CONTACTS,
    });

    await waitFor(() => expect(saveToContactsCheck.disabled).not.toBeFalsy());
    await act(async () => userEvent.click(contactsSelect));
    const klContact = container?.parentElement?.querySelector('[id="abdc"]') as HTMLElement; // Kilo Lima
    await waitFor(() => expect(klContact).toBeTruthy());
    await act(async () => userEvent.click(klContact));
    await waitFor(() => expect(saveToContactsCheck.disabled).toBeTruthy());
    await waitFor(() => expect(recipientAddress.value).toEqual('88888'));
    await waitFor(() => expect(recipientAddress.disabled).toBeTruthy());
  });
});
