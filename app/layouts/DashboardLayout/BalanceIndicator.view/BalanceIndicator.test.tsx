import React from 'react';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { store } from '../../../redux/store';
import { BalanceIndicator } from './BalanceIndicator.view';

const MOCK_BALANCE = '10.000000000000';

describe('BalanceIndicator', () => {
  test('renders the correct balance', () => {
    render(
      <Provider store={store}>
        <BalanceIndicator balance={MOCK_BALANCE} isSynced />
      </Provider>
    );

    const balanceIndicator = screen.getByTestId('balance-figure');
    expect(balanceIndicator).toHaveTextContent('10.000000000000');
  });

  test('renders 0 balance when balance prop is empty string', () => {
    render(
      <Provider store={store}>
        <BalanceIndicator balance="" isSynced />
      </Provider>
    );

    const balanceIndicator = screen.getByTestId('balance-figure');
    expect(balanceIndicator).toHaveTextContent('0.000000000000');
  });

  test('renders no sync message if synced to ledger', () => {
    render(
      <Provider store={store}>
        <BalanceIndicator balance={MOCK_BALANCE} isSynced />
      </Provider>
    );

    expect(screen.queryByTestId('balance-sync-message')).toBeNull();
  });

  test('renders sync message if not synced to ledger', () => {
    render(
      <Provider store={store}>
        <BalanceIndicator balance={MOCK_BALANCE} isSynced={false} />
      </Provider>
    );

    expect(screen.queryByTestId('balance-sync-message')).not.toBeNull();
  });
});
