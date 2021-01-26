import React from 'react';

import { screen } from '@testing-library/react';

import { WalletGuard } from '../../../app/components';
import { MobileCoinDContextValue } from '../../../app/contexts/MobileCoinDContext';
import renderSnapshot from '../../renderSnapshot';

jest.mock('../../../app/hooks/useMobileCoinD');

function setupComponent(contextOverides?: MobileCoinDContextValue) {
  const defaultContext = {
    encryptedEntropy: null,
    isAuthenticated: false,
  };

  renderSnapshot(
    <WalletGuard>success</WalletGuard>,
    {
      ...defaultContext,
      ...contextOverides,
    },
  );

  const success = screen.queryByText(/success/i);

  return {
    success,
  };
}

describe('WalletGuard', () => {
  test('authenticated users are given access to children prop of WalletGuard', () => {
    // @ts-ignore mock
    const { success } = setupComponent({
      encryptedEntropy: 'string',
      isAuthenticated: true,
    });
    expect(success).toBeInTheDocument();
  });

  test('unauthenticated users are redirected to CreateAccountView', () => {
    const { success } = setupComponent();
    expect(success).not.toBeInTheDocument();

    expect(screen.queryByText('Create a new account for this desktop wallet.')).toBeInTheDocument();
  });

  test('authenticated users with no encryptedEntropy are redirected to CreateAccountView', () => {
    // @ts-ignore mock
    const { success } = setupComponent({
      isAuthenticated: true,
    });
    expect(success).not.toBeInTheDocument();

    expect(screen.queryByText('Create a new account for this desktop wallet.')).toBeInTheDocument();
  });

  test('unauthenticated users with encyrptedEntropy are redirected to CreateAccountView', () => {
    // @ts-ignore mock
    const { success } = setupComponent({
      encryptedEntropy: 'entropy',
    });
    expect(success).not.toBeInTheDocument();

    expect(screen.queryByText('Create a new account for this desktop wallet.')).toBeInTheDocument();
  });
});
