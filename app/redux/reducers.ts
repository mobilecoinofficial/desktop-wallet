import { Action, TDecrementCountAction, TIncrementCountAction } from './actionTypes';

type TStoreState = {
  count: number;
};

export const initialStoreState = { count: 0 };

export const reducer = (state: TStoreState = initialStoreState, action: Action): TStoreState => {
  switch (action.type) {
    case 'INCREMENT_COUNT': {
      const { incrementCount } = (action as TIncrementCountAction).payload || 1;
      return { ...state, count: state.count + incrementCount };
    }
    case 'DECREMENT_COUNT': {
      const { decrementCount } = (action as TDecrementCountAction).payload || 1;
      return { ...state, count: state.count - decrementCount };
    }
    default:
      return state;
  }
};
