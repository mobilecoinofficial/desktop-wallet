import React from 'react';

import { screen } from '@testing-library/react';

import { UnlockWalletGuard } from '../../app/components';
import { MobileCoinDContextValue } from '../../app/contexts/MobileCoinDContext';
import renderSnapshot from '../renderSnapshot';

jest.mock('../../app/hooks/useMobileCoinD');

function setupComponent(contextOverrides?: MobileCoinDContextValue) {
  const defaultContext = {
    encryptedEntropy: null,
    isAuthenticated: false,
  };

  renderSnapshot(
    <UnlockWalletGuard>children</UnlockWalletGuard>,
    {
      ...defaultContext,
      ...contextOverrides,
    },
  );

  const children = screen.queryByText('children');

  return {
    children,
  };
}

describe('UnlockWalletGuard', () => {
  test('renders SplashScreen if app is not initalized', () => {
    // @ts-ignore mock
    const { children } = setupComponent({
      isInitialised: false,
    });

    expect(screen.queryByTestId('SplashScreen')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('redirects to CreateAccountView when !encryptedEntropy', () => {
    const { children } = setupComponent();

    expect(screen.queryByTestId('CreateAccountView')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('redirects to DashboardOverview with encryptedEntropy and isAthenticated', () => {
    // @ts-ignore mock
    const { children } = setupComponent({
      encryptedEntropy: 'entropy',
      isAuthenticated: true,
    });

    expect(screen.queryByTestId('DashboardOverview')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('renders children with encryptedEntropy and !isAthenticated', () => {
    // @ts-ignore mock
    const { children } = setupComponent({ encryptedEntropy: 'entropy' });

    expect(children).toBeInTheDocument();
  });
});
