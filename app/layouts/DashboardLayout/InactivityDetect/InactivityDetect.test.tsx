import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import userEvent from '@testing-library/user-event';

import { InactivityDetect } from './InactivityDetect.view';

const selectedAccount = {
  account: {
    accountId: '1234',
    firstBlockIndex: '1',
    key_derivation_version: '1',
    mainAddress: 'b58 code',
    name: null,
    nextSubaddressIndex: '1235',
    object: 'account',
  },
  balanceStatus: {
    accountBlockIndex: '1234',
    isSynced: true,
    localBlockIndex: '1234',
    networkBlockIndex: '1234',
    object: 'balance',
    orphanedPmob: '1234',
    pendingPmob: '1234',
    secretedPmob: '1234',
    spentPmob: '1234',
    unspentPmob: '1234',
  },
};

const TIME_FOR_INACTIVITY = 0;
const TIME_FOR_REACTION = 30000;

describe('InactivityDetect', () => {
  test('renders the correct balance', async () => {
    render(
      <InactivityDetect
        selectedAccount={selectedAccount}
        TIME_FOR_INACTIVITY={TIME_FOR_INACTIVITY}
        TIME_FOR_REACTION={TIME_FOR_REACTION}
      />
    );

    expect(screen.queryByText('Closing because of inactivity')).not.toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Closing because of inactivity')).toBeInTheDocument();
    });

    const submitButton = screen.getByRole('button', { name: 'Click to keep working' });

    userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.queryByText('Closing because of inactivity')).not.toBeInTheDocument();
    });
  });
});
