import type { SjclCipherEncrypted } from 'sjcl';

import { CreateWalletAction, CREATE_WALLET } from './type';

export const createWalletAction = (
  encryptedPassphrase: SjclCipherEncrypted,
  secretKey: string
): CreateWalletAction => ({
  payload: {
    encryptedPassphrase,
    secretKey,
  },
  type: CREATE_WALLET,
});
