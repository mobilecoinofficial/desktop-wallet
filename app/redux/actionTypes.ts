export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export type TIncrementCountAction = {
  type: string;
  payload: { incrementCount: number };
};

export type TDecrementCountAction = {
  type: string;
  payload: { decrementCount: number };
};

export type Action = TIncrementCountAction | TDecrementCountAction;
