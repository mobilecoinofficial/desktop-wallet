import type { SjclCipherEncrypted } from 'sjcl';

import { INITIALIZE, InitializeAction } from './type';

export const initializeAction = (
  encryptedPassword: SjclCipherEncrypted | undefined
): InitializeAction => ({
  payload: {
    encryptedPassword,
    isAuthenticated: false,
  },
  type: INITIALIZE,
});
