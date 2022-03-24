import type { SjclCipherEncrypted } from 'sjcl';

import { CreateWalletAction, CREATE_WALLET } from './type';

export const createWalletAction = (
  encryptedPassword: SjclCipherEncrypted,
  secretKey: string
): CreateWalletAction => ({
  payload: {
    encryptedPassword,
    secretKey,
  },
  type: CREATE_WALLET,
});
