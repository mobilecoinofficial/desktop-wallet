import { store } from '../../store';
import { confirmEntropyKnownAction } from './action';

export const confirmEntropyKnown = async (): Promise<void> => {
  store.dispatch(confirmEntropyKnownAction());
};

export type ConfirmEntropyKnownService = typeof confirmEntropyKnown;
