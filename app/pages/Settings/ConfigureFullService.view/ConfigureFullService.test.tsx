import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import '../../../testUtils/i18nForTests';

import { ConfigureFullServiceView } from './ConfigureFullService.view';

describe('ConfigureFullServiceView', () => {
  const mockOnClickBack = jest.fn();
  const mockToggle = jest.fn();
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
      accountBlockHeight: '1234',
      isSynced: true,
      localBlockHeight: '1234',
      networkBlockHeight: '1234',
      object: 'balance',
      orphanedPmob: '1234',
      pendingPmob: '1234',
      secretedPmob: '1234',
      spentPmob: '1234',
      unspentPmob: '1234',
    },
  };
  const configureFullServiceConfigs = {
    fullServiceDbPath: 'fullService/path',
    leaveFullServiceRunning: false,
    ledgerDbPath: 'ledger/path',
    toggleLeaveFullServiceRunning: mockToggle,
  };

  describe('component', () => {
    describe('render', () => {
      test('ConfigureFullServiceView renders correctly', () => {
        const { asFragment } = render(
          <ConfigureFullServiceView
            onClickBack={mockOnClickBack}
            selectedAccount={selectedAccount}
            configureFullServiceConfigs={configureFullServiceConfigs}
          />
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('breadcrumb navigation', () => {
      test('Settings breadcrumb navigates away from current view', () => {
        const { getByText } = render(
          <ConfigureFullServiceView
            onClickBack={mockOnClickBack}
            selectedAccount={selectedAccount}
            configureFullServiceConfigs={configureFullServiceConfigs}
          />
        );

        const configMessage =
          'This screen shows how to customize the behavior of background ledger processor (named Full-Service) as well as how to perform some basic resets.';
        expect(getByText(configMessage)).toBeInTheDocument();
        userEvent.click(screen.getByText('Settings'));
        expect(mockOnClickBack).toHaveBeenCalled();
      });
    });
  });
});
