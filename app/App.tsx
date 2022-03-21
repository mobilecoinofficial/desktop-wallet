import React, { useEffect, useState } from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { GlobalStyles } from './components/GlobalStyles';
import { MOBILE_COIN_DARK, MOBILE_COIN_LIGHT } from './constants/themes';
// import { FullServiceProvider } from './contexts/FullServiceContext';
import { fetchAllTransactionLogsForAccount } from './redux/actions/fetchAllTransactionLogsForAccount/service';
import { initialize } from './redux/actions/initialize/service';
import { updateStatus } from './redux/actions/updateStatus/service';
import { store } from './redux/store';
import { internalRoutes, InternalRoutesRenderer } from './routes';
import { setTheme } from './theme';
import { Account } from './types';
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

  const fetchBalance = async (accountId: string, account?: Account) => {
    if (account) {
      updateStatus(accountId, account);
    }
  };

  const fetchLogs = async (accountId: string) => {
    fetchAllTransactionLogsForAccount(accountId);
  };

  useEffect(() => {
    const { selectedAccount } = store.getState();
    const accountId = selectedAccount?.account?.accountId ?? '';

    setFetchUpdatesTimer(
      setInterval(() => {
        fetchBalance(accountId, selectedAccount?.account);
        fetchLogs(accountId);
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
            {/* <FullServiceProvider> */}
            <GlobalStyles />
            <InternalRoutesRenderer routes={internalRoutes} />
            {/* </FullServiceProvider> */}
          </SnackbarProvider>
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  );
};

export default hot(App);
