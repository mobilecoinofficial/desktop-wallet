import { confirmEntropyKnownAction } from '../redux/actions';
import { store } from '../redux/store';

export const confirmEntropyKnown = async (): Promise<void> => {
  store.dispatch(confirmEntropyKnownAction());
};

export type ConfirmEntropyKnownService = typeof confirmEntropyKnown;
