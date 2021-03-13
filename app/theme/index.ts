import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import type { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';
import type {
  Palette as MuiPalette,
  TypeBackground as MuiTypeBackground,
} from '@material-ui/core/styles/createPalette';
import type { Shadows as MuiShadows } from '@material-ui/core/styles/shadows';

import { BLACK_DARK } from '../constants/colors';
import { MOBILE_COIN_DARK_THEME, MOBILE_COIN_LIGHT_THEME } from '../constants/themes';
import typography from './typography';

interface TypeBackground extends MuiTypeBackground {
  dark: string;
}

interface Palette extends MuiPalette {
  background: TypeBackground;
  longCode: {
    lowercased: string;
    uppercased: string;
    number: string;
  };
  number: {
    negative: string;
    positive: string;
  };
}

export interface Theme extends MuiTheme {
  name: string;
  palette: Palette;
}

interface ThemeConfig {
  responsiveFontSizes?: boolean;
  theme?: string;
}

interface ThemeOptions {
  name?: string;
  typography?: Record<string, any>;
  overrides?: Record<string, any>;
  palette?: Record<string, any>;
  shadows?: MuiShadows;
}

const baseOptions: ThemeOptions = {
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: BLACK_DARK,
      },
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
  },
  typography,
};

const themesOptions: ThemeOptions[] = [MOBILE_COIN_DARK_THEME, MOBILE_COIN_LIGHT_THEME];

export const setTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme({
    ...baseOptions,
    ...themeOptions,
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme as Theme;
};
