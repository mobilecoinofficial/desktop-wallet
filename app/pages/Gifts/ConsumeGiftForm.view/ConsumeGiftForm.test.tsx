import React from 'react';

import { render, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { SnackbarProvider } from 'notistack';

import '../../../testUtils/i18nForTests';
import { ConsumeGiftForm } from './ConsumeGiftForm.view';

/*
  CheckGiftCodeStatus response, if successful:
    giftCodeMemo: ""
    giftCodeStatus: "GiftCodeAvailable"
    giftCodeValue: 1010000000000

  If failed:
    giftCodeMemo: ""
    giftCodeStatus: "GiftCodeClaimed" or "GiftCodeSubmittedPending"
    giftCodeValue: 6070606000000
*/

const selectedAccount = {
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
    accountBlockHeight: '158974',
    isSynced: true,
    localBlockHeight: '158974',
    networkBlockHeight: '158974',
    object: 'balance',
    orphanedPmob: '18000000000001',
    pendingPmob: '0',
    secretedPmob: '0',
    spentPmob: '35410000000000',
    unspentPmob: '908298888888888',
  },
};

const confirmation = {
  giftCodeB58:
    'KT2xjDefXi3g4ZS1hEiwZxSx7zS2WYxpkuXVgXPi7RHj3xxSeyL2JXvkytY9V4a1aNVuPGgmjCoMjiZhwCiWtc1rodSmV6jib92oWso5',
  giftCodeStatus: 'GiftCodeAvailable',
  giftValue: 1000400000000,
};

describe('Consume gift form', () => {
  test('initial view', async () => {
    const onClickCancel = jest.fn();
    const onClickClaimGift = jest.fn();
    const onClickOpenGift = jest.fn();

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          confirmation={confirmation}
          feePmob="4000000000"
          onClickCancel={onClickCancel}
          onClickClaimGift={onClickClaimGift}
          onClickOpenGift={onClickOpenGift}
          selectedAccount={selectedAccount}
          showModal={false}
        />
      </SnackbarProvider>
    );

    const openGiftButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;
    const giftCodeField = container.querySelector('[id="giftCodeB58"]') as HTMLInputElement;

    expect(container.innerHTML.includes('Open Gifts of MOB')).toBeTruthy();
    expect(openGiftButton).toBeTruthy();
    expect(openGiftButton.disabled).toBeTruthy();
    expect(giftCodeField).toBeTruthy();
    expect(giftCodeField.value).toBeFalsy();

    await act(async () => userEvent.type(giftCodeField, '1234567890', { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(giftCodeField.value).toEqual('1234567890'));
    expect(openGiftButton.disabled).toBeFalsy();

    await act(async () => userEvent.click(openGiftButton));
    await waitFor(() => expect(onClickOpenGift).toHaveBeenCalledWith('1234567890'));
  });

  test('second view, cancelled', async () => {
    const onClickCancel = jest.fn();
    const onClickClaimGift = jest.fn();
    const onClickOpenGift = jest.fn();

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          confirmation={confirmation}
          feePmob="4000000000"
          onClickCancel={onClickCancel}
          onClickClaimGift={onClickClaimGift}
          onClickOpenGift={onClickOpenGift}
          selectedAccount={selectedAccount}
          showModal
        />
      </SnackbarProvider>
    );

    const cancelButton = container.parentElement.querySelector(
      '[id="cancel-modal"]'
    ) as HTMLInputElement;

    expect(container.parentElement.innerHTML.includes('Confirmation')).toBeTruthy();
    expect(cancelButton).toBeTruthy();

    await act(async () => userEvent.click(cancelButton));
    await waitFor(() => expect(onClickCancel).toHaveBeenCalled());
  });

  test('second view, confirmed', async () => {
    const onClickCancel = jest.fn();
    const onClickClaimGift = jest.fn();
    const onClickOpenGift = jest.fn();

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          confirmation={confirmation}
          feePmob="4000000000"
          onClickCancel={onClickCancel}
          onClickClaimGift={onClickClaimGift}
          onClickOpenGift={onClickOpenGift}
          selectedAccount={selectedAccount}
          showModal
        />
      </SnackbarProvider>
    );

    const claimButton = container.parentElement.querySelector(
      '[id="claim-modal"]'
    ) as HTMLInputElement;

    expect(container.parentElement.innerHTML.includes('Confirmation')).toBeTruthy();
    expect(claimButton).toBeTruthy();

    await act(async () => userEvent.click(claimButton));
    await waitFor(() => expect(onClickClaimGift).toHaveBeenCalled());
  });
});
