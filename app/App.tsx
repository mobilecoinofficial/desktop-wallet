import React, { useEffect, useState } from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { ErrorHandler } from './components/ErrorHandler';
import { GlobalStyles } from './components/GlobalStyles';
import { MOBILE_COIN_DARK, MOBILE_COIN_LIGHT } from './constants/themes';
import { initialReduxStoreState } from './redux/reducers/reducers';
import {
  getAllTransactionLogsForAccount,
  initialize,
  logError,
  updateStatus,
} from './redux/services';
import { store } from './redux/store';
import { internalRoutes, InternalRoutesRenderer } from './routes';
import { setTheme } from './theme';
import { SelectedAccount } from './types';
import * as localStore from './utils/LocalStore';

const App: FC = () => {
  const [theme, setThemeReact] = useState(
    setTheme({
      responsiveFontSizes: true,
      theme: ipcRenderer.sendSync('get-theme') === 'light' ? MOBILE_COIN_LIGHT : MOBILE_COIN_DARK,
    })
  );

  useEffect(() => {
    ipcRenderer.on('set-theme-light', () => {
      setThemeReact(
        setTheme({
          responsiveFontSizes: true,
          theme: MOBILE_COIN_LIGHT,
        })
      );
    });
    ipcRenderer.on('set-theme-dark', () => {
      setThemeReact(
        setTheme({
          responsiveFontSizes: true,
          theme: MOBILE_COIN_DARK,
        })
      );
    });

    return () => {
      ipcRenderer.removeAllListeners('set-theme-light');
      ipcRenderer.removeAllListeners('set-theme-dark');
    };
  }, []);

  useEffect(() => {
    try {
      const encryptedPassphrase = localStore.getEncryptedPassphrase();
      initialize(encryptedPassphrase);
    } catch (err) {
      initialize(undefined);
    }
  }, []);

  const [fetchUpdatesTimer, setFetchUpdatesTimer] = useState<NodeJS.Timer>();

  const fetchBalance = async (selectedAccount: SelectedAccount) => {
    if (selectedAccount.account) {
      await updateStatus(selectedAccount.account.accountId, selectedAccount.account);
    }
  };

  const fetchLogs = async (selectedAccount: SelectedAccount) => {
    await getAllTransactionLogsForAccount(selectedAccount.account.accountId);
  };

  useEffect(() => {
    setFetchUpdatesTimer(
      setInterval(async () => {
        // store.getState() here ensures the selected account is in sync with the store.
        // solves an issue of this component's local state fighting with the redux store.
        const { selectedAccount } = store.getState();
        if (selectedAccount !== initialReduxStoreState.selectedAccount) {
          try {
            await fetchBalance(selectedAccount);
            await fetchLogs(selectedAccount);
          } catch (err) {
            logError(err, 'app/App.tsx:useEffect');
          }
        }
      }, 10000)
    );
    return () => {
      if (fetchUpdatesTimer) {
        clearInterval(fetchUpdatesTimer);
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider dense maxSnack={5}>
            <ErrorHandler />
            <GlobalStyles />
            <InternalRoutesRenderer routes={internalRoutes} />
          </SnackbarProvider>
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  );
};

export default hot(App);
