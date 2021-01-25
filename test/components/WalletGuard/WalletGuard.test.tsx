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

  test('unauthenticated users are redirected to UnlockWalletView', () => {
    const { success } = setupComponent();
    expect(success).not.toBeInTheDocument();
    // expect(screen.queryByTestId('DashboardOverview')).toBeInTheDocument(); ???
    // expect(screen.queryByTestId('UnlockWalletView')).toBeInTheDocument(); ???
    // IF ROUTEPATHS.ROOT GOES TO UNLOCKWALLETVIEW WHICH HAS UNLOCKWALLETGUARD
    // THEN HAVING NO ENTROPY TAKES PRESCEDENCE OVER BEING UNAUTHENTICATED
    // USER WILL BE REDIRECTED TO ROUTEPATHS.CREATE, NOT UNLOCKWALLETVIEW OR DASHBOARD OVERVIEW

    // 2 DIFF ROUTEPATHS.ROOT ---> DASHBOARD AND UNLOCKWALLETVIEW
  });
});

// if you are authenticated you should always also have an encrypted entropy),
// ------------


// test('unauthenticated with no entropy string', () => {
//   const { children } = setupComponent();

//   expect(screen.queryByText('Create a new account for this desktop wallet.')).toBeInTheDocument();
//   expect(children).not.toBeInTheDocument();
// });

// test('authenticated with no entropy string', () => {
// // @ts-ignore mock
//   const { children } = setupComponent({ encryptedEntropy: null, isAuthenticated: true });

//   expect(screen.queryByTestId('DashboardOverview')).not.toBeInTheDocument();
//   expect(children).not.toBeInTheDocument();
// });

// test('authenticated with entropy string', () => {
// // @ts-ignore mock
//   const { children } = setupComponent({ encryptedEntropy: 'entropy', isAuthenticated: true });

//   expect(screen.queryByTestId('DashboardOverview')).toBeInTheDocument();
//   expect(children).not.toBeInTheDocument();
// });

// test('unauthenticated with entropy string', () => {
// // @ts-ignore mock
//   const { children } = setupComponent({ encryptedEntropy: 'entropy' });

//   expect(children).toBeInTheDocument();
// });
// });