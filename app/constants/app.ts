export const APP_VERSION = process.env.npm_package_version;

export const MIN_WINDOW_HEIGHT = 480;
export const MIN_WINDOW_WIDTH = 640;

export const HISTORY_PAGE_SIZE = 5; // for usage in Transaction History

export const INITIAL_WINDOW_HEIGHT = 880;

export const TIME_FOR_INACTIVITY = 300000000; // after this time, will be considered inactive: 5' times 1000 > 3 days
export const TIME_FOR_REACTION = 30000; // extra time to avoid closing: 30"

export const RANDOM_COLORS = ['#8B35E0', '#1F639A', '#EAA520', '#15A389', '#8D969D', '#D82E26'];

export const randomColor = (): string =>
  RANDOM_COLORS[Math.floor(RANDOM_COLORS.length * Math.random())];

export enum TokenIds {
  MOB = 0,
  // TODO for testing we are using 8192 instead of 1
  // FIX-ME BEFORE MERGING INTO DEV, CHANGE THIS BACK TO 1
  // USDM = 1,
  USDM = 8192,
}

export enum TokenPrecision {
  // pico
  MOB = 1000000000000,
  // micro
  USDM = 1000000,
}
