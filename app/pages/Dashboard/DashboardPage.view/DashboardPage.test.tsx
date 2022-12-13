import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import '../../../testUtils/i18nForTests';
import { store } from '../../../redux/store';
import { DashboardView } from './DashboardPage.view';

const selectedAccount = {
  account: {
    accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
    firstBlockIndex: '0',
    key_derivation_version: '1',
    mainAddress:
      'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
    name: 'FK OWN',
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
    balancePerToken: {
      0: {
        orphanedPmob: '18000000000001',
        pendingPmob: '0',
        secretedPmob: '0',
        spentPmob: '35410000000000',
        unspentPmob: '908298888888888',
      },
    },
  },
};

const accounts = {
  accountIds: [
    'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
    'ced1f045c1473cbcf006ff58b3eb91baf8b31505e841944b821f128f1870e1db',
  ],
  accountMap: {
    ced1f045c1473cbcf006ff58b3eb91baf8b31505e841944b821f128f1870e1db: {
      accountId: 'ced1f045c1473cbcf006ff58b3eb91baf8b31505e841944b821f128f1870e1db',
      firstBlockIndex: '0',
      keyDerivationVersion: '2',
      mainAddress:
        '44fxrxj9C4m9oTt19AbjYAeobGXb4T6RXYiYBakb6iY1t87mKoH2smWwKmWjci326qk52ekNsoAsrmta8kEcuSDEAXaiGQJQTLnaRgna44L',
      name: 'FK #2',
      nextBlockIndex: '161416',
      nextSubaddressIndex: '2',
      object: 'account',
      recoveryMode: false,
    },
    ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8: {
      accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
      firstBlockIndex: '0',
      keyDerivationVersion: '1',
      mainAddress:
        'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
      name: 'FK OWN',
      nextBlockIndex: '161411',
      nextSubaddressIndex: '2',
      object: 'account',
      recoveryMode: false,
    },
  },
};

test('Dashboard shows account address code', () => {
  const { container } = render(
    <Provider store={store}>
      <DashboardView
        onClose={() => undefined}
        selectedAccount={selectedAccount}
        accounts={accounts}
      />
    </Provider>
  );

  expect(container.innerHTML.includes('Account Address Code')).toBeTruthy();
  expect(container.innerHTML.includes('FK OWN')).toBeTruthy();

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
