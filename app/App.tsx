import React from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { MemoryRouter } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import { MOBILE_COIN_DARK } from './constants/themes';
import { FullServiceProvider } from './contexts/FullServiceContext';
import routes, { renderRoutes } from './routes';
import { setTheme } from './theme';

const App: FC = () => {
  const theme = setTheme({
    responsiveFontSizes: true,
    theme: MOBILE_COIN_DARK,
  });

  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider dense maxSnack={5}>
          <FullServiceProvider>
            <GlobalStyles />
            {renderRoutes(routes)}
          </FullServiceProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

export default hot(App);
