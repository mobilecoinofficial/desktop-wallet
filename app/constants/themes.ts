import {
  BLACK,
  BLACK_CHARADE,
  BLACK_DARK,
  BLACK_SHARK,
  BLUE_DODGER,
  BLUE_NEON_BLUE,
  GOLD,
  GOLD_DARK,
  GOLD_LIGHT,
  GREEN_EMERALD,
  GREEN_PUERTO_RICO,
  GREY,
  GREY_DARK,
  GREY_LIGHT,
  GREY_MERCURY,
  ORANGE_NEON_CARROT,
  ORANGE_ORANGE,
  PINK_LAVENDER_ROSE,
  PURPLE_BLUE_MOODY,
  RED,
  RED_BITTERSWEET,
  WHITE,
  WHITE_IVORY,
} from './colors';

export const MOBILE_COIN_DARK = 'MOBILE_COIN_DARK';
export const MOBILE_COIN_LIGHT = 'MOBILE_COIN_LIGHT';

export const MOBILE_COIN_DARK_GOLD_THEME = {
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

export const MOBILE_COIN_DARK_THEME = {
  name: MOBILE_COIN_DARK,
  palette: {
    background: {
      dark: BLACK_SHARK,
      default: BLACK_CHARADE,
      paper: BLACK_CHARADE,
    },
    longCode: {
      lowercased: PINK_LAVENDER_ROSE,
      number: ORANGE_NEON_CARROT,
      uppercased: BLUE_DODGER,
    },
    number: {
      negative: RED_BITTERSWEET,
      positive: GREEN_PUERTO_RICO,
    },
    primary: {
      main: BLUE_NEON_BLUE,
    },
    secondary: {
      main: PURPLE_BLUE_MOODY,
    },
    text: {
      primary: GREY_MERCURY,
      secondary: WHITE_IVORY,
      tertiary: BLUE_NEON_BLUE,
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
