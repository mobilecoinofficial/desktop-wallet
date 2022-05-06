/** TODO: Bring Redux up to spec with best practices
 * In the current setup (post-Apr 2022 refactor), actions are generated manually, asynchronous code is handled
 * in a service pattern, the reducers are in a monolithic switch statement, and the store is a flat object. Aligning
 * with Redux's best practices, we'll need to:
 * - Split the store and the reducers into logical domains. Splitting up the reducers into logical chunks in Redux's intended pattern
 *    relies on using the combineReducers method. This has the added functionality of expecting the store to be similarly
 *    divided. If we split off all account-related reducers, the combineReducers method will expect the account-related
 *    reducers to be pointing to the store's `account` attribute, and that all components of the state affected by the
 *    account reducers will be explicitly those within the store's `account` attribute. There are ways around the store's
 *    refactor, but none of the methods are clean or straightforward.
 * - Handle asynchronous logic with Thunk. Thunk provides an excellent middleware to handle asynchronous logic, and is the
 *    current best practice for handling these flows. Implementations of Thunk can quickly bloat the action namespace, and
 *    can lead to a lot of boilerplate code. To handle that issue, we should switch to redux's Action Creator pattern. The
 *    Action Creator pattern allows for a reduction in overall code, and similarly tends to expect the logical domain split
 *    refactor mentioned above with respect to the store's and reducer's structure.
 */

import { applyMiddleware, createStore } from 'redux';

import { loggerMiddleware } from './middleware';
import { initialReduxStoreState, reducer } from './reducers/reducers';

export const store = createStore(
  reducer,
  initialReduxStoreState,
  applyMiddleware(loggerMiddleware) // uncomment loggerMiddleware for redux action logging
);
