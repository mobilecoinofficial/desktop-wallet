import React, { useEffect } from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { MemoryRouter } from 'react-router-dom';

import { GlobalStyles, SavePasswordModal } from './components';
import { FullServiceProvider } from './contexts/FullServiceContext';
import { MOBILE_COIN_DARK, MOBILE_COIN_LIGHT } from './constants/themes';
import routes, { renderRoutes } from './routes';
import { setTheme } from './theme';
import { setKeychainAccount } from './utils/keytarService';

const App: FC = () => {
  const [theme, setThemeReact] = React.useState(
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
  });

  const [openSavePasswordModal, setOpenSavePasswordModal] = React.useState(false);
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    ipcRenderer.on(
      'open-save-password-modal',
      (_event, _accountName: string, accountPassword: string) => {
        setOpenSavePasswordModal(true);
        setPassword(accountPassword);
      }
    );

    return () => {
      ipcRenderer.removeAllListeners('open-save-password-modal');
    };
  }, []);

  const onCloseSavePasswordModalHandler = () => setOpenSavePasswordModal(false);
  const onSavePasswordModalHandler = (accountName: string, accountPassword: string) => {
    setKeychainAccount(accountName, accountPassword);
    setOpenSavePasswordModal(false);
  };

  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider dense maxSnack={5}>
          <FullServiceProvider>
            <GlobalStyles />
            {renderRoutes(routes)}
            <SavePasswordModal
              onClose={onCloseSavePasswordModalHandler}
              onSave={onSavePasswordModalHandler}
              open={openSavePasswordModal}
              password={password}
            />
          </FullServiceProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

export default hot(App);
