import React from 'react';

import { screen } from '@testing-library/react';

import { WalletGuard } from '../../../app/components';
import { MobileCoinDContextValue } from '../../../app/contexts/MobileCoinDContext';
import renderSnapshot from '../../renderSnapshot';

jest.mock('../../../app/hooks/useMobileCoinD');

function setupComponent(contextOverides?: MobileCoinDContextValue) {
  const defaultContext = {
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

// -------------------
describe('WalletGuard', () => {
  test('authenticated users are given access to children prop of WalletGuard', () => {
    // @ts-ignore mock
    const { success } = setupComponent({
      isAuthenticated: true,
    });
    expect(success).toBeInTheDocument();
  });

  test('unauthenticated users are redirected to UnlockWalletView', () => {
    const { success } = setupComponent();
    expect(success).not.toBeInTheDocument();
    expect(screen.queryByTestId('UnlockWalletView')).toBeInTheDocument();
  });
});
