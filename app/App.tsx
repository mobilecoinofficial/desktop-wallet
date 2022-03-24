import React, { useEffect, useState } from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { GlobalStyles } from './components/GlobalStyles';
import { MOBILE_COIN_DARK, MOBILE_COIN_LIGHT } from './constants/themes';
import { fetchAllTransactionLogsForAccount } from './redux/actions/fetchAllTransactionLogsForAccount/service';
import { initialize } from './redux/actions/initialize/service';
import { updateStatus } from './redux/actions/updateStatus/service';
import { ReduxStoreState } from './redux/reducers/reducers';
import { internalRoutes, InternalRoutesRenderer } from './routes';
import { setTheme } from './theme';
import { SelectedAccount } from './types';
import * as localStore from './utils/LocalStore';

type Props = ReduxProps;

const App: FC<Props> = (props: Props): JSX.Element => {
  const { selectedAccount } = props;
  const { accountId } = selectedAccount.account;
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
      const encryptedPassword = localStore.getEncryptedPassword();
      initialize(encryptedPassword);
    } catch (err) {
      initialize(undefined);
    }
  }, []);

  const [fetchUpdatesTimer, setFetchUpdatesTimer] = useState<NodeJS.Timer>();

  const fetchBalance = async () => {
    if (selectedAccount.account) {
      updateStatus(accountId, selectedAccount.account);
    }
  };

  const fetchLogs = async () => {
    fetchAllTransactionLogsForAccount(accountId);
  };

  useEffect(() => {
    setFetchUpdatesTimer(
      setInterval(() => {
        fetchBalance();
        fetchLogs();
      }, 10000)
    );
    return () => {
      if (fetchUpdatesTimer) {
        clearInterval(fetchUpdatesTimer);
      }
    };
  }, [selectedAccount, accountId]);

  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider dense maxSnack={5}>
          <GlobalStyles />
          <InternalRoutesRenderer routes={internalRoutes} />
        </SnackbarProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

type ReduxProps = { selectedAccount: SelectedAccount };

const mapState = (state: ReduxStoreState): ReduxProps => ({
  selectedAccount: state.selectedAccount,
});

const ConnectedApp = connect<
  ReduxProps,
  Record<string, never>,
  Record<string, never>,
  ReduxStoreState
>(mapState)(App);

export default hot(ConnectedApp);
