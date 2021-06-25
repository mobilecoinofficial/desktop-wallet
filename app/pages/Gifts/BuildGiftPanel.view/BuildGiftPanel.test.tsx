import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { SnackbarProvider } from 'notistack';

import '../../../testUtils/i18nForTests';
import { BuildGiftPanel } from './BuildGiftPanel.view';

const FEE_PMOB = '3000000000';

const GIFT_CODES = [
  {
    accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
    entropy: '2b25a1535454226a70bd999fbe36a7dd2a53fc3fee3dc48b0c9fb7b088ee305c',
    giftCodeB58:
      '7kaRstJZ77fNg7mYpr2HPHBvXmFBATvFH2UfVLkC9X3iWLeR1xbkshVDqLZ13zRag7usgyVvVp8dD6JwQJkcmWhX1YTQfHwC5hS6rCqT',
    memo: '',
    object: 'gift_code',
    txoIdHex: 'db7845b3acc4db4161c770be0b5c10e65989224523e435b0e71a6ce1ab5e03f7',
    valuePmob: '2003000000000',
  },
  {
    accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
    entropy: '3c294516932aa50b61e728bb3ee1123f353525e39f4edad48d1d41e2f4df4532',
    giftCodeB58:
      '3ct94dFPNKwYZ2mBqnaNdVYBTQ6nD8Lu39YyDoqnY2rW1sn3L8gT34vrgkSk5a1roAxbY8fwXLcJFufT8dxuemNoV1h77BEVZX942gAK',
    memo: 'some memo',
    object: 'gift_code',
    txoIdHex: '2a2c62ff6ad21073a561a4375fdd256a3b60a25a5e2d6524d4e4839d4d2a0d86',
    valuePmob: '3003000000000',
  },
];

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
    unspentPmob: '908298888888888',
  },
};

describe('Build gift form', () => {
  test('is shown correctly without gift codes', async () => {
    const { container } = render(
      <SnackbarProvider>
        <BuildGiftPanel
          buildGiftCode={() => undefined}
          deleteStoredGiftCodeB58={() => undefined}
          existingPin="111111"
          feePmob={FEE_PMOB}
          getAllGiftCodes={() => undefined}
          giftCodes={[]}
          isSynced
          pinThresholdPmob="1"
          selectedAccount={SELECTED_ACCOUNT}
          submitGiftCode={() => undefined}
        />
      </SnackbarProvider>
    );

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(container.innerHTML.includes('Manage Gift Codes')).toBeFalsy();
    expect(container.innerHTML.includes('2.0000000')).toBeFalsy();
    expect(container.innerHTML.includes('3.0000000')).toBeFalsy();

    const mobValue = container.querySelector('[id="mobValue"]') as HTMLInputElement;
    const submitButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;

    expect(mobValue).not.toBeFalsy();
    expect(submitButton).not.toBeFalsy();

    await waitFor(() => expect(submitButton.disabled).toBeTruthy());
    await act(async () => userEvent.type(mobValue, '5', { delay: 1 }));
    await waitFor(() => expect(Number(mobValue.value)).toEqual(5));
    await waitFor(() => expect(submitButton.disabled).toBeFalsy());
    await act(async () => userEvent.click(submitButton));
  });

  test('has actions in the gift codes part', async () => {
    const fakeHandleClick = jest.fn();
    const fakeDeleteStoredGiftCodeB58 = jest.fn().mockResolvedValue(true);
    const fakeGetAllGiftCodes = jest.fn().mockResolvedValue([]);

    const { container } = render(
      <SnackbarProvider>
        <BuildGiftPanel
          buildGiftCode={() => undefined}
          deleteStoredGiftCodeB58={fakeDeleteStoredGiftCodeB58}
          existingPin="111111"
          feePmob={FEE_PMOB}
          getAllGiftCodes={fakeGetAllGiftCodes}
          giftCodes={GIFT_CODES}
          handleCopyClick={fakeHandleClick}
          isSynced
          pinThresholdPmob="1"
          selectedAccount={SELECTED_ACCOUNT}
          submitGiftCode={() => undefined}
        />
      </SnackbarProvider>
    );

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(container.innerHTML.includes('Manage Gift Codes')).toBeTruthy();
    const copy1 = container.querySelector('[id="copy-1"]') as HTMLInputElement;
    expect(copy1).not.toBeFalsy();
    await act(async () => userEvent.click(copy1));
    expect(fakeHandleClick).toHaveBeenCalled();

    const delete0 = container.querySelector('[id="delete-0"]') as HTMLInputElement;
    expect(delete0).not.toBeFalsy();
    await act(async () => userEvent.click(delete0));

    const parent = container.parentElement as HTMLElement;
    expect(parent).not.toBeFalsy();
    await waitFor(() => expect(parent.innerHTML.includes('Delete Gift Code?')).toBeTruthy());

    const cancelDelete = parent.querySelector('[id="cancel-delete"]') as HTMLInputElement;
    const confirmDelete = parent.querySelector('[id="confirm-delete"]') as HTMLInputElement;
    expect(cancelDelete).not.toBeFalsy();
    expect(confirmDelete).not.toBeFalsy();

    await act(async () => userEvent.click(confirmDelete));

    await waitFor(() => expect(fakeDeleteStoredGiftCodeB58).toHaveBeenCalled());
    await waitFor(() => expect(fakeGetAllGiftCodes).toHaveBeenCalled());
  });

  test('is shown correctly with gift codes', () => {
    const { container } = render(
      <SnackbarProvider>
        <BuildGiftPanel
          buildGiftCode={() => undefined}
          deleteStoredGiftCodeB58={() => undefined}
          existingPin="111111"
          feePmob={FEE_PMOB}
          giftCodes={GIFT_CODES}
          isSynced
          pinThresholdPmob="1"
          selectedAccount={SELECTED_ACCOUNT}
          submitGiftCode={() => undefined}
        />
      </SnackbarProvider>
    );

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(container.innerHTML.includes('Manage Gift Codes')).toBeTruthy();
    expect(container.innerHTML.includes('2.00000000')).toBeTruthy();
    expect(container.innerHTML.includes('3.00000000')).toBeTruthy();
  });
});
