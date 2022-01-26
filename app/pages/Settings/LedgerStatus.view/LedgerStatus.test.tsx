/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { LedgerStatus } from './LedgerStatus.view';

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

describe('Ledger status', () => {
  test('works when synced', async () => {
    SELECTED_ACCOUNT.balanceStatus.accountBlockHeight = '158974';
    const { container } = render(<LedgerStatus selectedAccount={SELECTED_ACCOUNT} />);

    expect(container.innerHTML.includes('The ledger is synced')).toBeTruthy();
    expect(container.innerHTML.includes('Network Blocks')).toBeTruthy();
    expect(container.innerHTML.includes('Local Blocks')).toBeTruthy();
    expect(container.innerHTML.includes('Account Blocks')).toBeTruthy();
  });

  test('shows error when not synced', async () => {
    SELECTED_ACCOUNT.balanceStatus.accountBlockHeight = '1589740';
    const { container } = render(<LedgerStatus selectedAccount={SELECTED_ACCOUNT} />);

    expect(container.innerHTML.includes("There's been an error in the ledger.")).toBeTruthy();
    expect(container.innerHTML.includes('Network Blocks')).toBeTruthy();
    expect(container.innerHTML.includes('Local Blocks')).toBeTruthy();
    expect(container.innerHTML.includes('Account Blocks')).toBeTruthy();
  });
});
