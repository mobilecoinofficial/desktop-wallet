import {
  BLACK_DARK,
  BLACK_LIGHT,
  BLUE_DARK,
  BLUE_LIGHT,
  GREEN_LIGHT,
  GREY_DARK,
  GREY_LIGHT,
  WHITE_DARK,
  WHITE_LIGHT,
} from './colors';

export const MOBILE_COIN_DARK = 'MOBILE_COIN_DARK';
export const MOBILE_COIN_LIGHT = 'MOBILE_COIN_LIGHT';

export const MOBILE_COIN_DARK_THEME = {
  name: MOBILE_COIN_DARK,
  palette: {
    background: {
      dark: BLACK_DARK,
      default: BLACK_LIGHT,
      paper: BLACK_LIGHT,
    },
    longCode: {
      lowercased: BLUE_LIGHT,
      number: WHITE_LIGHT,
      uppercased: GREEN_LIGHT,
    },
    number: {
      negative: WHITE_LIGHT,
      positive: BLUE_DARK,
    },
    primary: {
      main: BLUE_DARK,
    },
    secondary: {
      main: BLUE_DARK,
    },
    text: {
      primary: WHITE_LIGHT,
      secondary: GREY_LIGHT,
      tertiary: BLUE_DARK,
    },
    type: 'dark',
  },
};

export const MOBILE_COIN_LIGHT_THEME = {
  name: MOBILE_COIN_LIGHT,
  palette: {
    background: {
      dark: WHITE_DARK,
      default: WHITE_LIGHT,
      paper: WHITE_LIGHT,
    },
    longCode: {
      lowercased: BLUE_LIGHT,
      number: GREY_DARK,
      uppercased: GREEN_LIGHT,
    },
    number: {
      negative: GREY_DARK,
      positive: BLUE_DARK,
    },
    primary: {
      main: BLUE_DARK,
    },
    secondary: {
      main: BLUE_DARK,
    },
    text: {
      primary: GREY_DARK,
      secondary: GREY_LIGHT,
      tertiary: BLUE_DARK,
    },
    type: 'light',
  },
};
