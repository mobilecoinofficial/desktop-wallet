import type { SjclCipherEncrypted } from 'sjcl';

import { INITIALIZE, InitializeAction } from './type';

export const initializeAction = (
  encryptedpassword: SjclCipherEncrypted | undefined
): InitializeAction => ({
  payload: {
    encryptedpassword,
    isAuthenticated: false,
  },
  type: INITIALIZE,
});
