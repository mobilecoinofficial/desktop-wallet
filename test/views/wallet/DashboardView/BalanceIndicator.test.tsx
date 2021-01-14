import React from 'react';

import { render, screen } from '@testing-library/react';

import BalanceIndicator from '../../../../app/views/wallet/DashboardView/BalanceIndicator';

const MOCK_BALANCE = '1234230000000';

describe('BalanceIndicator', () => {
  test('renders the correct balance', () => {
    render(<BalanceIndicator balance={MOCK_BALANCE} isSynced />);

    const balanceIndicator = screen.getByTestId('balance-figure');

    expect(balanceIndicator).toHaveTextContent('1.234230000000');
  });

  test('renders no sync message if synced to ledger', () => {
    render(<BalanceIndicator balance={MOCK_BALANCE} isSynced />);

    expect(screen.queryByTestId('balance-sync-message')).toBeNull();
  });

  test('renders sync message if not synced to ledger', () => {
    render(<BalanceIndicator balance={MOCK_BALANCE} isSynced={false} />);

    expect(screen.queryByTestId('balance-sync-message')).not.toBeNull();
  });
});
