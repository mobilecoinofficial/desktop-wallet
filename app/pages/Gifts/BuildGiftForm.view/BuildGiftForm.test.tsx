import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { SnackbarProvider } from 'notistack';

import '../../../testUtils/i18nForTests';
import { BuildGiftForm } from './BuildGiftForm.view';

const FEE_PMOB = '400000000'; // see feeConfirmation below

describe('Build Gift Form', () => {
  test('has a functioning happy path with no PIN needed', async () => {
    const fakeBuildGiftCode = jest.fn().mockResolvedValue({
      feeConfirmation: 400000000n,
      giftCode: undefined,
      giftCodeB58:
        '3Cwgr4Ev7xcVVv54LNj1b3P9jbjJr5XcwLB4qQYqyTb9VNAzprFJpqpJAZsrSTGWHBVP2j3gDb2NaPRRR9UNXo8rj9tiBCJs7vXTMe77',
      totalValueConfirmation: 4000400000000n,
      txProposal: {},
    });
    const fakeSubmitGiftCode = jest.fn().mockResolvedValue(true);
    const fakeGetAllGiftCodes = jest.fn().mockResolvedValue(true);

    const { container } = render(
      <SnackbarProvider>
        <BuildGiftForm
          buildGiftCode={fakeBuildGiftCode}
          codeClicked={() => {}}
          existingPin="111111"
          feePmob={FEE_PMOB}
          isSyncedBuffered={() => true}
          pinThresholdPmob="99999999999999"
          selectedAccount={{
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
          }}
          getAllGiftCodes={fakeGetAllGiftCodes}
          submitGiftCode={fakeSubmitGiftCode}
        />
      </SnackbarProvider>
    );

    expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
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

    const parent = container.parentElement as HTMLElement;
    expect(parent).not.toBeFalsy();
    await waitFor(() => expect(parent.innerHTML.includes('Gift Confirmation')).toBeTruthy());
    expect(fakeBuildGiftCode).toHaveBeenCalled();

    const showGiftCode = parent.querySelector('[id="show-code-modal"]') as HTMLInputElement;
    const confirmModal = parent.querySelector('[id="confirm-modal"]') as HTMLInputElement;

    expect(showGiftCode).not.toBeFalsy();
    expect(confirmModal).not.toBeFalsy();
    expect(confirmModal.disabled).toBeTruthy();

    expect(parent.innerHTML.includes('4.000800000000')).toBeTruthy();
    expect(parent.innerHTML.includes('4.000000000000')).toBeTruthy();

    await act(async () => userEvent.click(showGiftCode));
    await waitFor(() => expect(parent.innerHTML.includes('Gift Code (Pending)')).toBeTruthy());
    await waitFor(() => expect(confirmModal.disabled).toBeFalsy());

    await act(async () => userEvent.click(confirmModal));
    await waitFor(() => expect(fakeSubmitGiftCode).toHaveBeenCalled());
    await waitFor(() => expect(fakeGetAllGiftCodes).toHaveBeenCalled());
  });
});
