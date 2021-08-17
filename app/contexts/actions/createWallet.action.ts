import type { SjclCipherEncrypted } from 'sjcl';

export const CREATE_WALLET = 'CREATE_WALLET';

export type CreateWalletActionType = {
  payload: {
    encryptedPassphrase: SjclCipherEncrypted;
    secretKey: string;
  };
  type: 'CREATE_WALLET';
};

export const createWalletAction = (
  encryptedPassphrase: SjclCipherEncrypted,
  secretKey: string
): CreateWalletActionType => ({
  payload: {
    encryptedPassphrase,
    secretKey,
  },
  type: CREATE_WALLET,
});
