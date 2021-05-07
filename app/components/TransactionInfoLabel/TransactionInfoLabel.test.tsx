import React from 'react';

import { screen, render } from '@testing-library/react';

import { TransactionInfoLabel } from './TransactionInfoLabel.view';
import '@testing-library/jest-dom/extend-expect';
import '../../testUtils/i18nForTests';

describe('TransactionInfoLabel', () => {
  test('renders positive transaction info label', () => {
    render(<TransactionInfoLabel valuePmob="10" sign="+" label="received" />);

    expect(screen.getByText('+0.000000000010received')).toBeInTheDocument();
  });

  test('renders negative transaction info label', () => {
    render(<TransactionInfoLabel valuePmob="100000" sign="-" label="sent" />);

    expect(screen.getByText('-0.000000100000sent')).toBeInTheDocument();
  });
});
