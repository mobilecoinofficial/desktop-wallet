import { SjclCipherEncrypted } from 'sjcl';

export const CREATE_WALLET = 'CREATE_WALLET';

export type CreateWalletAction = {
  payload: {
    encryptedPassphrase: SjclCipherEncrypted;
    secretKey: string;
  };
  type: 'CREATE_WALLET';
};
