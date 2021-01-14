import {
  BLACK, BLACK_DARK, GOLD, GREY, GREY_LIGHT,
} from './colors';

export const MOBILE_COIN_DARK = 'MOBILE_COIN_DARK';
export const MOBILE_COIN_LIGHT = 'MOBILE_COIN_LIGHT';

export const MOBILE_COIN_DARK_THEME = {
  name: MOBILE_COIN_DARK,
  palette: {
    background: {
      dark: BLACK_DARK,
      default: BLACK,
      paper: BLACK,
    },
    primary: {
      main: GOLD,
    },
    secondary: {
      main: GOLD,
    },
    text: {
      primary: GREY_LIGHT,
      secondary: GREY,
      tertiary: GOLD,
    },
    type: 'dark',
  },
};
