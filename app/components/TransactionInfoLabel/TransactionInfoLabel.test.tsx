import React from 'react';

import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { TOKENS } from '../../constants/tokens';
import { store } from '../../redux/store';
import { TransactionInfoLabel } from './TransactionInfoLabel.view';
import '@testing-library/jest-dom/extend-expect';
import '../../testUtils/i18nForTests';

describe('TransactionInfoLabel', () => {
  test('renders positive transaction info label', () => {
    render(
      <Provider store={store}>
        <TransactionInfoLabel value="10" sign="+" label="received" token={TOKENS.MOB} />
      </Provider>
    );

    expect(screen.getByText('+0.000000000010received')).toBeInTheDocument();
  });

  test('renders negative transaction info label', () => {
    render(
      <Provider store={store}>
        <TransactionInfoLabel value="100000" sign="-" label="sent" token={TOKENS.MOB} />
      </Provider>
    );

    expect(screen.getByText('-0.000000100000sent')).toBeInTheDocument();
  });
});
