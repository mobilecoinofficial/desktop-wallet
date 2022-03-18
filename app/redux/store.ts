import { applyMiddleware, createStore } from 'redux';

import { logger } from './middleware';
import { initialStoreState, reducer } from './reducers';

export const store = createStore(reducer, initialStoreState, applyMiddleware(logger));
