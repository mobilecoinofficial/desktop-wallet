import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { Action } from './actions';

export const loggerMiddleware: Middleware =
  (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: Action) => {
    // eslint-disable-next-line no-console
    console.log('will dispatch', action);

    const returnValue = next(action);

    // eslint-disable-next-line no-console
    console.log('state after dispatch', store.getState());

    return returnValue;
  };
