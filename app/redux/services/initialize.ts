import { SjclCipherEncrypted } from 'sjcl';

import { initializeAction } from '../actions';
import { store } from '../store';

export const initialize = (encryptedPassword: SjclCipherEncrypted | undefined): void => {
  store.dispatch(initializeAction(encryptedPassword));
};
