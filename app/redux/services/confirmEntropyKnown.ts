import { confirmEntropyKnownAction } from '../actions';
import { store } from '../store';

export const confirmEntropyKnown = async (): Promise<void> => {
  store.dispatch(confirmEntropyKnownAction());
};
