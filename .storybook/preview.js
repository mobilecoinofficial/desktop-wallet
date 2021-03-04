import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { setTheme } from '../app/theme';
import GlobalStyles from '../app/components/GlobalStyles';
import { MOBILE_COIN_DARK } from '../app/constants/themes';

const theme = setTheme({
  responsiveFontSizes: true,
  theme: MOBILE_COIN_DARK,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
