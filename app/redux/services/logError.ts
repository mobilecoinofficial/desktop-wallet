import { logErrorAction } from '../actions';
import { store } from '../store';

export const logError = (error: unknown, generatedFrom: string): void => {
  store.dispatch(logErrorAction(error, generatedFrom));
};
