import type { SjclCipherEncrypted } from 'sjcl';

import { INITIALIZE, InitializeAction } from './type';

export const initializeAction = (
  encryptedPassphrase: SjclCipherEncrypted | undefined
): InitializeAction => ({
  payload: {
    encryptedPassphrase,
    isAuthenticated: false,
  },
  type: INITIALIZE,
});
