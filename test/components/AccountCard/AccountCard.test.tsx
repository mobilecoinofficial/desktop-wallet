import React from 'react';

import 'jest-canvas-mock';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AccountCard from '../../../app/components/AccountCard';
import renderSnapshot from '../../renderSnapshot';

const MOCK_LONG_CODE = 'mockLongCode';
const MOCK_QR_CODE = 'mockQRCode';

function setupComponent(props?) {
  // @ts-ignore mock
  renderSnapshot(
    <AccountCard
      account={{
        ...{
          b58Code: MOCK_LONG_CODE,
          balance: 'one million',
          mobUrl: MOCK_QR_CODE,
        },
        ...props,
      }}
    />
  );
}

describe('AccountCard', () => {
  test('renders long code with tooltip by default and toggles correctly', () => {
    setupComponent();

    expect(screen.queryByTestId('account-card-center')).not.toBeNull();
    expect(screen.queryByTestId('long-code-code')).not.toBeNull();
    expect(screen.queryByTestId('account-card-tooltip')).toHaveAttribute(
      'title',
      'Click to copy to clipboard.'
    );
    expect(screen.queryByTestId('account-card-qr-code')).toBeNull();

    userEvent.click(screen.getByTestId('account-card-toggle'));

    expect(screen.queryByTestId('long-code-code')).toBeNull();
    expect(screen.queryByTestId('account-card-tooltip')).toBeNull();
    expect(screen.queryByTestId('account-card-qr-code')).not.toBeNull();
  });

  test('renders name correctly', () => {
    const mockName = 'timmy';
    setupComponent({ name: mockName });

    expect(screen.getByTestId('account-card-name').textContent).toEqual(mockName);
  });

  test('renders correct placeholder for unnamed account', () => {
    setupComponent();

    expect(screen.getByTestId('account-card-name').textContent).toEqual('Unnamed Account');
  });

  test('renders correct toggle tooltip', () => {
    setupComponent();

    const toggle = screen.getByTestId('account-card-toggle');

    expect(toggle).toHaveAttribute('title', 'Show MobURL QR Code');

    userEvent.click(screen.getByTestId('account-card-toggle'));

    expect(toggle).toHaveAttribute('title', 'Show Account Address Code');
  });
});
