import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { DashboardView } from './DashboardPage.view';

const selectedAccount = {
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

test('Dashboard shows account address code', () => {
  const { container } = render(
    <DashboardView onClose={() => undefined} selectedAccount={selectedAccount} />
  );

  expect(container.innerHTML.includes('Account Address Code')).toBeTruthy();
  expect(container.innerHTML.includes('fktt22')).toBeTruthy();

  expect(container.innerHTML.includes('s')).toBeTruthy();
  expect(container.innerHTML.includes('y')).toBeTruthy();
  expect(container.innerHTML.includes('J')).toBeTruthy();
  expect(container.innerHTML.includes('A')).toBeTruthy();
  expect(container.innerHTML.includes('d')).toBeTruthy();
  expect(container.innerHTML.includes('2')).toBeTruthy();
  expect(container.innerHTML.includes('Q')).toBeTruthy();
  expect(container.innerHTML.includes('o')).toBeTruthy();
  expect(container.innerHTML.includes('H')).toBeTruthy();
  expect(container.innerHTML.includes('7')).toBeTruthy();
  expect(container.innerHTML.includes('x')).toBeTruthy();
});
