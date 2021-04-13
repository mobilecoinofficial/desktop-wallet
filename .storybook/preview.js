import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { I18nextProvider } from 'react-i18next';

import i18n from '../app/i18n';
import { setTheme } from '../app/theme';
import GlobalStyles from '../app/components/GlobalStyles';
import { MOBILE_COIN_DARK } from '../app/constants/themes';

const theme = setTheme({
  responsiveFontSizes: true,
  theme: MOBILE_COIN_DARK,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </ThemeProvider>
  ),
];
