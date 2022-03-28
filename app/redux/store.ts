import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// import { loggerMiddleware } from './middleware';
import { initialReduxStoreState, reducer } from './reducers/reducers';

export const store = createStore(
  reducer,
  initialReduxStoreState,
  applyMiddleware(/* loggerMiddleware, */ thunk)
);
