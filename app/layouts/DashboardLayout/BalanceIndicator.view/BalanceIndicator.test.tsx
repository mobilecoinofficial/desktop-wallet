import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { BalanceIndicator } from './BalanceIndicator.view';

const MOCK_BALANCE = '10.000000000000';

describe('BalanceIndicator', () => {
  test('renders the correct balance', () => {
    render(<BalanceIndicator balance={MOCK_BALANCE} isSynced />);

    const balanceIndicator = screen.getByTestId('balance-figure');
    expect(balanceIndicator).toHaveTextContent('10.000000000000');
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
