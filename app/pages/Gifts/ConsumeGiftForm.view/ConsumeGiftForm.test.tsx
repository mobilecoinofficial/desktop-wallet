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

describe('Consume gift form', () => {
  test('succeeds with available gift, allowing cancel', async () => {
    const mockCheckGift = jest
      .fn()
      .mockResolvedValue({ giftCodeStatus: 'GiftCodeAvailable', giftCodeValue: 1010000000000 });

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          checkGiftCodeStatus={mockCheckGift}
          claimGiftCode={jest.fn()}
          selectedAccount={selectedAccount}
        />
      </SnackbarProvider>
    );

    const openGiftButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;
    const giftCodeField = container.querySelector('[id="giftCodeB58"]') as HTMLInputElement;

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(openGiftButton).toBeTruthy();
    expect(openGiftButton.disabled).toBeTruthy();
    expect(giftCodeField).toBeTruthy();
    expect(giftCodeField.value).toBeFalsy();

    await act(async () => userEvent.type(giftCodeField, '1234567890', { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(giftCodeField.value).toEqual('1234567890'));
    expect(openGiftButton.disabled).toBeFalsy();

    await act(async () => userEvent.click(openGiftButton));
    const containerParent = container.parentElement as HTMLElement;
    await waitFor(() =>
      expect(containerParent.innerHTML.includes('Gift Confirmation')).toBeTruthy()
    );
    await waitFor(() => expect(containerParent.innerHTML.includes('1.0100000')).toBeTruthy());
    expect(mockCheckGift).toHaveBeenCalled();

    const cancelButton = containerParent.querySelector('[id="cancel-modal"]') as HTMLInputElement;
    await act(async () => userEvent.click(cancelButton));
    await waitFor(() => expect(container.innerHTML.includes('Gift Confirmation')).toBeFalsy());
  });

  test('succeeds with available gift, allowing opening', async () => {
    const mockClaimGift = jest.fn().mockResolvedValue({});
    const mockCheckGift = jest
      .fn()
      .mockResolvedValue({ giftCodeStatus: 'GiftCodeAvailable', giftCodeValue: 1010000000000 });

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          checkGiftCodeStatus={mockCheckGift}
          claimGiftCode={mockClaimGift}
          selectedAccount={selectedAccount}
        />
      </SnackbarProvider>
    );

    const openGiftButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;
    const giftCodeField = container.querySelector('[id="giftCodeB58"]') as HTMLInputElement;

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(openGiftButton).toBeTruthy();
    expect(openGiftButton.disabled).toBeTruthy();
    expect(giftCodeField).toBeTruthy();
    expect(giftCodeField.value).toBeFalsy();

    await act(async () => userEvent.type(giftCodeField, '1234567890', { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(giftCodeField.value).toEqual('1234567890'));
    expect(openGiftButton.disabled).toBeFalsy();

    await act(async () => userEvent.click(openGiftButton));
    const containerParent = container.parentElement as HTMLElement;
    await waitFor(() =>
      expect(containerParent.innerHTML.includes('Gift Confirmation')).toBeTruthy()
    );
    await waitFor(() => expect(containerParent.innerHTML.includes('1.0100000')).toBeTruthy());
    expect(mockCheckGift).toHaveBeenCalled();

    const claimButton = containerParent.querySelector('[id="claim-modal"]') as HTMLInputElement;
    await act(async () => userEvent.click(claimButton));
    await waitFor(() => expect(container.innerHTML.includes('Gift Confirmation')).toBeFalsy());
    expect(mockClaimGift).toHaveBeenCalled();
  });

  test('rejects already claimed gift', async () => {
    const mockCheckGift = jest
      .fn()
      .mockResolvedValue({ giftCodeStatus: 'GiftCodeClaimed', giftCodeValue: 1010000000000 });

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          checkGiftCodeStatus={mockCheckGift}
          claimGiftCode={jest.fn()}
          selectedAccount={selectedAccount}
        />
      </SnackbarProvider>
    );

    const openGiftButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;
    const giftCodeField = container.querySelector('[id="giftCodeB58"]') as HTMLInputElement;

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(openGiftButton).toBeTruthy();
    expect(openGiftButton.disabled).toBeTruthy();
    expect(giftCodeField).toBeTruthy();
    expect(giftCodeField.value).toBeFalsy();

    await act(async () => userEvent.type(giftCodeField, '1234567890', { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(giftCodeField.value).toEqual('1234567890'));
    expect(openGiftButton.disabled).toBeFalsy();

    await act(async () => userEvent.click(openGiftButton));
    await waitFor(() => expect(container.innerHTML.includes('Gift Confirmation')).toBeFalsy());
  });

  test('rejects submitted pending gift', async () => {
    const mockCheckGift = jest.fn().mockResolvedValue({
      giftCodeStatus: 'GiftCodeSubmittedPending',
      giftCodeValue: 1010000000000,
    });

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          checkGiftCodeStatus={mockCheckGift}
          claimGiftCode={jest.fn()}
          selectedAccount={selectedAccount}
        />
      </SnackbarProvider>
    );

    const openGiftButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;
    const giftCodeField = container.querySelector('[id="giftCodeB58"]') as HTMLInputElement;

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(openGiftButton).toBeTruthy();
    expect(openGiftButton.disabled).toBeTruthy();
    expect(giftCodeField).toBeTruthy();
    expect(giftCodeField.value).toBeFalsy();

    await act(async () => userEvent.type(giftCodeField, '1234567890', { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(giftCodeField.value).toEqual('1234567890'));
    expect(openGiftButton.disabled).toBeFalsy();

    await act(async () => userEvent.click(openGiftButton));
    await waitFor(() => expect(container.innerHTML.includes('Gift Confirmation')).toBeFalsy());
  });

  test('rejects on claiming gift error', async () => {
    const mockCheckGift = jest.fn().mockRejectedValue(new Error('SOMETHING WRONG'));

    const { container } = render(
      <SnackbarProvider>
        <ConsumeGiftForm
          checkGiftCodeStatus={mockCheckGift}
          claimGiftCode={jest.fn()}
          selectedAccount={selectedAccount}
        />
      </SnackbarProvider>
    );

    const openGiftButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;
    const giftCodeField = container.querySelector('[id="giftCodeB58"]') as HTMLInputElement;

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
    expect(openGiftButton).toBeTruthy();
    expect(openGiftButton.disabled).toBeTruthy();
    expect(giftCodeField).toBeTruthy();
    expect(giftCodeField.value).toBeFalsy();

    await act(async () => userEvent.type(giftCodeField, '1234567890', { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(giftCodeField.value).toEqual('1234567890'));
    expect(openGiftButton.disabled).toBeFalsy();

    await act(async () => userEvent.click(openGiftButton));
    await waitFor(() => expect(container.innerHTML.includes('Gift Confirmation')).toBeFalsy());
  });
});
