import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-canvas-mock';
import { SnackbarProvider } from 'notistack';

import AccountCard from '../../../app/components/AccountCard';

const MOCK_LONG_CODE = 'mockLongCode';
const MOCK_QR_CODE = 'mockQRCode';

describe('AccountCard', () => {
  test('renders long code with tooltip by default and toggles correctly', () => {
    render(
      <SnackbarProvider>
        <AccountCard
          account={{
            b58Code: MOCK_LONG_CODE,
            balance: 'one million',
            mobUrl: MOCK_QR_CODE,
          }}
        />
      </SnackbarProvider>,
    );

    expect(screen.queryByTestId('account-card-center')).not.toBeNull();
    expect(screen.queryByTestId('long-code-code')).not.toBeNull();
    expect(screen.queryByTestId('account-card-tooltip')).toHaveAttribute(
      'title',
      'Click to copy to clipboard.',
    );
    expect(screen.queryByTestId('account-card-qr-code')).toBeNull();

    fireEvent.click(screen.getByTestId('account-card-toggle'));

    expect(screen.queryByTestId('long-code-code')).toBeNull();
    expect(screen.queryByTestId('account-card-tooltip')).toBeNull();
    expect(screen.queryByTestId('account-card-qr-code')).not.toBeNull();
  });

  test('renders name correctly', () => {
    const mockName = 'timmy';

    render(
      <SnackbarProvider>
        <AccountCard
          account={{
            b58Code: MOCK_LONG_CODE,
            balance: 'one million',
            mobUrl: MOCK_QR_CODE,
            name: mockName,
          }}
        />
      </SnackbarProvider>,
    );

    expect(screen.getByTestId('account-card-name').textContent).toEqual(
      mockName,
    );
  });

  test('renders correct placeholder for unnamed account', () => {
    render(
      <SnackbarProvider>
        <AccountCard
          account={{
            b58Code: MOCK_LONG_CODE,
            balance: 'one million',
            mobUrl: MOCK_QR_CODE,
          }}
        />
      </SnackbarProvider>,
    );

    expect(screen.getByTestId('account-card-name').textContent).toEqual(
      'Unnamed Account',
    );
  });

  test('renders correct toggle tooltip', () => {
    render(
      <SnackbarProvider>
        <AccountCard
          account={{
            b58Code: MOCK_LONG_CODE,
            balance: 'one million',
            mobUrl: MOCK_QR_CODE,
          }}
        />
      </SnackbarProvider>,
    );

    const toggle = screen.getByTestId('account-card-toggle');

    expect(toggle).toHaveAttribute('title', 'Show MobURL QR Code');

    fireEvent.click(screen.getByTestId('account-card-toggle'));

    expect(toggle).toHaveAttribute('title', 'Show Account Address Code');
  });
});
