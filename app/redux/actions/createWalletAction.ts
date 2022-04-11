import { SjclCipherEncrypted } from 'sjcl';

export const CREATE_WALLET = 'CREATE_WALLET';

export type CreateWalletAction = {
  payload: {
    encryptedPassword: SjclCipherEncrypted;
    secretKey: string;
  };
  type: 'CREATE_WALLET';
};

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
