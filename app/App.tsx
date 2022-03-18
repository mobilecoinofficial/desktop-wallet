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
import { FullServiceProvider } from './contexts/FullServiceContext';
import { decrement, increment } from './redux/actions';
import { store } from './redux/store';
import { internalRoutes, InternalRoutesRenderer } from './routes';
import { setTheme } from './theme';

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

  const [incrementTimer, setIncrementTimer] = useState<NodeJS.Timer>();
  const [decrementTimer, setDecrementTimer] = useState<NodeJS.Timer>();

  useEffect(() => {
    setIncrementTimer(
      setInterval(() => {
        store.dispatch(increment(8));
      }, 5000)
    );
    setDecrementTimer(
      setInterval(() => {
        store.dispatch(decrement(3));
      }, 2000)
    );
    return () => {
      if (incrementTimer) {
        clearInterval(incrementTimer);
      }
      if (decrementTimer) {
        clearInterval(decrementTimer);
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider dense maxSnack={5}>
            <FullServiceProvider>
              <GlobalStyles />
              <InternalRoutesRenderer routes={internalRoutes} />
            </FullServiceProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </MemoryRouter>
    </Provider>
  );
};

export default hot(App);
