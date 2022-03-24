import type { SjclCipherEncrypted } from 'sjcl';

import { CreateWalletAction, CREATE_WALLET } from './type';

export const createWalletAction = (
  encryptedpassword: SjclCipherEncrypted,
  secretKey: string
): CreateWalletAction => ({
  payload: {
    encryptedpassword,
    secretKey,
  },
  type: CREATE_WALLET,
});
