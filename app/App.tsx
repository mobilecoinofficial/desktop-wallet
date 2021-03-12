import React, { useEffect } from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { MemoryRouter } from 'react-router-dom';

import { GlobalStyles, SavePasswordModal } from './components';
import { MOBILE_COIN_DARK } from './constants/themes';
import { MobileCoinDProvider } from './contexts/MobileCoinDContext';
import client from './mobilecoind/client';
import routes, { renderRoutes } from './routes';
import { setTheme } from './theme';
import { setKeychainAccount } from './utils/keytarService';

const App: FC = () => {
  const theme = setTheme({
    responsiveFontSizes: true,
    theme: MOBILE_COIN_DARK,
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
          <MobileCoinDProvider client={client}>
            <GlobalStyles />
            {renderRoutes(routes)}
            <SavePasswordModal
              onClose={onCloseSavePasswordModalHandler}
              onSave={onSavePasswordModalHandler}
              open={openSavePasswordModal}
              password={password}
            />
          </MobileCoinDProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

export default hot(App);
