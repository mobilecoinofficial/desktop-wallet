import { SjclCipherEncrypted } from 'sjcl';

import { store } from '../../store';
import { initializeAction } from './action';

export const initialize = (encryptedPassphrase: SjclCipherEncrypted | undefined): void => {
  store.dispatch(initializeAction(encryptedPassphrase));
};
