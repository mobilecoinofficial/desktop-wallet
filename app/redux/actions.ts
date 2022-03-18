import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  TDecrementCountAction,
  TIncrementCountAction,
} from './actionTypes';

export const increment = (incrementCount: number): TIncrementCountAction => ({
  payload: { incrementCount },
  type: INCREMENT_COUNT,
});

export const decrement = (decrementCount: number): TDecrementCountAction => ({
  payload: { decrementCount },
  type: DECREMENT_COUNT,
});
