import React from 'react';

import { screen } from '@testing-library/react';

import { UnlockWalletGuard } from '../../../app/components';
import { MobileCoinDContextValue } from '../../../app/contexts/MobileCoinDContext';
import renderSnapshot from '../../renderSnapshot';

jest.mock('../../../app/hooks/useMobileCoinD');

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
  test('unauthenticated with no entropy string', () => {
    const { children } = setupComponent();

    expect(screen.queryByText('Create a new account for this desktop wallet.')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('returns SplashScreen if app is not initalized', () => {
    // @ts-ignore mock
    const { children } = setupComponent({
      isInitialised: false,
    });

    expect(screen.queryByTestId('SplashScreen')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('authenticated with no entropy string', () => {
  // @ts-ignore mock
    const { children } = setupComponent({ encryptedEntropy: null, isAuthenticated: true });

    expect(screen.queryByTestId('DashboardOverview')).not.toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('authenticated with entropy string', () => {
  // @ts-ignore mock
    const { children } = setupComponent({ encryptedEntropy: 'entropy', isAuthenticated: true });

    expect(screen.queryByTestId('DashboardOverview')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('unauthenticated with entropy string', () => {
  // @ts-ignore mock
    const { children } = setupComponent({ encryptedEntropy: 'entropy' });

    expect(children).toBeInTheDocument();
  });
});
