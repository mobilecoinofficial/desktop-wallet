import React, { ReactElement } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider, StylesOptions } from '@material-ui/styles/';
import { render } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { MemoryRouter } from 'react-router-dom';

import { MobileCoinDProvider } from '../app/contexts/MobileCoinDContext';
import type { MobileCoinDContextValue } from '../app/contexts/MobileCoinDContext';
import useMobileCoinD from '../app/hooks/useMobileCoinD';
import client from '../app/mobilecoind/client';
import routes, { renderRoutes } from '../app/routes';
import { setTheme } from '../app/theme';

jest.mock('../app/hooks/useMobileCoinD');

// This hack overrides random CSS naming
const generateClassName: StylesOptions['generateClassName'] = (
  rule,
  sheet,
): string => {
  return `${sheet.options.classNamePrefix}-${rule.key}`;
};

// CBB: This function is starting to be gnarly as its use has evolved with time.
// We should consider setting up the testing environment in an easier, unified way.
const renderSnapshot = (
  testComponent: ReactElement,
  mobilecoindContextOverides?: MobileCoinDContextValue,
) => {
  const theme = setTheme({
    responsiveFontSizes: true,
    theme: 'MOBILE_COIN_DARK',
  });

  const mockUseMobileCoinD = useMobileCoinD as jest.MockedFunction<
    typeof useMobileCoinD
  >;

  const mockUseMobileCoinDFunctions = {
    createAccount: jest.fn(),
    importAccount: jest.fn(),
    unlockWallet: jest.fn(),
  };

  const mockUseMobileCoinDValues: MobileCoinDContextValue = {
    accountName: 'account name',
    b58Code: 'b58 code',
    balance: BigInt(88888888),
    encryptedEntropy: 'encrypted entropy',
    entropy: Buffer.from('1', 'hex'),
    giftCodes: [],
    isAuthenticated: true,
    isEntropyKnown: true,
    isInitialised: true,
    localBlockIndex: '1234',
    mobUrl: 'string',
    monitorId: Uint8Array.from([1, 2, 3]),
    networkHighestBlockIndex: '1234',
    nextBlock: '1235',
    receiver: null,
    ...mockUseMobileCoinDFunctions,
    ...mobilecoindContextOverides,
  };

  // @ts-ignore mock
  mockUseMobileCoinD.mockImplementation(() => {
    return mockUseMobileCoinDValues;
  });

  // CBB: we may want to just import a test version of App.tsx
  const renderedScreen = render(
    <MemoryRouter initialEntries={['/test']} initialIndex={0}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider dense maxSnack={5}>
          <MobileCoinDProvider client={client}>
            <StylesProvider generateClassName={generateClassName}>
              <MuiThemeProvider theme={theme}>
                {renderRoutes(routes, testComponent)}
              </MuiThemeProvider>
            </StylesProvider>
          </MobileCoinDProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );

  return { ...renderedScreen, mockUseMobileCoinDValues };
};

export default renderSnapshot;
