import { SjclCipherEncrypted } from 'sjcl';

import { store } from '../../store';
import { initializeAction } from './action';

export const initialize = (encryptedpassword: SjclCipherEncrypted | undefined): void => {
  store.dispatch(initializeAction(encryptedpassword));
};
