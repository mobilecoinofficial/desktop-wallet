import React from 'react';

import { screen } from '@testing-library/react';

import { WalletGuard } from '../../../app/components';
import { FullServiceContextValue } from '../../../app/contexts/FullServiceContext';
import renderSnapshot from '../../renderSnapshot';

jest.mock('../../../app/hooks/useFullService');

function setupComponent(contextOverrides?: FullServiceContextValue) {
  const defaultContext = {
    encryptedEntropy: null,
    isAuthenticated: false,
  };

  renderSnapshot(<WalletGuard>success</WalletGuard>, {
    ...defaultContext,
    ...contextOverrides,
  });

  const success = screen.queryByText('success');

  return {
    success,
  };
}

describe('WalletGuard', () => {
  test('authenticated users with entropy are given access to children prop of WalletGuard', () => {
    // @ts-ignore mock
    const { success } = setupComponent({
      encryptedEntropy: 'string',
      isAuthenticated: true,
    });
    expect(success).toBeInTheDocument();
  });

  test('unauthenticated users with no entropy are redirected to CreateAccountView', () => {
    const { success } = setupComponent();
    expect(success).not.toBeInTheDocument();
    expect(screen.queryByTestId('CreateAccountView')).toBeInTheDocument();
  });

  test('unauthenticated users with entropy are redirected to UnlockWalletView', () => {
    // @ts-ignore mock
    setupComponent({
      encryptedEntropy: 'string',
      isAuthenticated: false,
    });
    expect(screen.queryByTestId('UnlockWalletView')).toBeInTheDocument();
  });

  test('authenticated users with no entropy are given access to children prop of WalletGuard', () => {
    // @ts-ignore mock
    const { success } = setupComponent({
      isAuthenticated: true,
    });
    expect(success).toBeInTheDocument();
  });
});
