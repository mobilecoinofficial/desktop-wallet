import {
  BLACK,
  BLACK_DARK,
  GOLD,
  GOLD_DARK,
  GOLD_LIGHT,
  GREY,
  GREY_DARK,
  GREY_LIGHT,
  RED,
  WHITE,
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
    longCode: {
      lowercased: WHITE,
      number: GOLD_LIGHT,
      uppercased: GOLD_DARK,
    },
    number: {
      negative: RED,
      positive: GOLD,
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

export const MOBILE_COIN_LIGHT_THEME = {
  name: MOBILE_COIN_LIGHT,
  palette: {
    background: {
      dark: GREY_LIGHT,
      default: WHITE,
      paper: WHITE,
    },
    longCode: {
      lowercased: GREY_DARK,
      number: GOLD_LIGHT,
      uppercased: GOLD_DARK,
    },
    number: {
      negative: RED,
      positive: GOLD,
    },
    primary: {
      main: GOLD,
    },
    secondary: {
      main: GOLD,
    },
    text: {
      primary: GREY_DARK,
      secondary: GREY,
      tertiary: GOLD,
    },
    type: 'light',
  },
};
