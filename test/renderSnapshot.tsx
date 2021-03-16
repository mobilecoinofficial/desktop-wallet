import React, { ReactElement } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider, StylesOptions } from '@material-ui/styles/';
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { FullServiceProvider } from '../app/contexts/FullServiceContext';
import type { FullServiceContextValue } from '../app/contexts/FullServiceContext';
import useFullService from '../app/hooks/useFullService';
import i18n from '../app/i18n';
import routes, { renderRoutes } from '../app/routes';
import { setTheme } from '../app/theme';

jest.mock('../app/hooks/useFullService');

// This hack overrides random CSS naming
const generateClassName: StylesOptions['generateClassName'] = (rule, sheet): string =>
  `${sheet.options.classNamePrefix}-${rule.key}`;

// CBB: This function is starting to be gnarly as its use has evolved with time.
// We should consider setting up the testing environment in an easier, unified way.
const renderSnapshot = (
  testComponent: ReactElement,
  fullServiceContextOverrides?: FullServiceContextValue
): RenderResult => {
  const theme = setTheme({
    responsiveFontSizes: true,
    theme: 'MOBILE_COIN_DARK',
  });

  const mockUseFullService = useFullService as jest.MockedFunction<typeof useFullService>;

  const mockUseFullServiceFunctions = {
    createAccount: jest.fn(),
    importAccount: jest.fn(),
    unlockWallet: jest.fn(),
  };

  const mockUseFullServiceValues: FullServiceContextValue = {
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
    ...mockUseFullServiceFunctions,
    ...fullServiceContextOverrides,
  };

  // @ts-ignore mock
  mockUseFullService.mockImplementation(() => {
    return mockUseFullServiceValues;
  });

  // CBB: we may want to just import a test version of App.tsx
  const renderedScreen = render(
    <MemoryRouter initialEntries={['/test']} initialIndex={0}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider dense maxSnack={5}>
            <FullServiceProvider>
              <StylesProvider generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                  {renderRoutes(routes, testComponent)}
                </MuiThemeProvider>
              </StylesProvider>
            </FullServiceProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </I18nextProvider>
    </MemoryRouter>
  );

  return { ...renderedScreen, mockUseFullServiceValues };
};

export default renderSnapshot;
