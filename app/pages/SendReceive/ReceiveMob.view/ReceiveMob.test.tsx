import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import SelectedAccount from '../../../types/SelectedAccount';
import { ReceiveMob } from './ReceiveMob.view';

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
} as SelectedAccount;

test('Displays and hides contacts', () => {
  const { container } = render(
    <ReceiveMob
      contacts={[
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
      ]}
      selectedAccount={SELECTED_ACCOUNT}
    />
  );

  const contactsList = container.querySelector('[id="contactsList"]') as HTMLInputElement;

  expect(container.innerHTML.includes('To receive MOB')).toBeTruthy();
  expect(container.innerHTML.includes('Public Address')).toBeTruthy();
  expect(contactsList).not.toBeFalsy();
  expect(container?.parentElement?.innerHTML.includes('Foxtrot Golf')).toBeFalsy();
  expect(container?.parentElement?.innerHTML.includes('Kilo Lima')).toBeFalsy();
  expect(container?.parentElement?.innerHTML.includes('Sierra Tango')).toBeFalsy();
  userEvent.click(contactsList);
  expect(container?.parentElement?.innerHTML.includes('Foxtrot Golf')).toBeTruthy();
  expect(container?.parentElement?.innerHTML.includes('Kilo Lima')).toBeTruthy();
  expect(container?.parentElement?.innerHTML.includes('Sierra Tango')).toBeTruthy();
});

test("Doesn't include contacts if none are available", () => {
  const { container } = render(<ReceiveMob contacts={[]} selectedAccount={SELECTED_ACCOUNT} />);
  expect(container.innerHTML.includes('To receive MOB')).toBeTruthy();
  expect(container.innerHTML.includes('Public Address')).toBeTruthy();
});
