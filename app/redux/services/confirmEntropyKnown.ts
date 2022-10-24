import { confirmEntropyKnownAction } from '../actions';
import { store } from '../store';

export const confirmEntropyKnown = (): void => {
  store.dispatch(confirmEntropyKnownAction());
};
