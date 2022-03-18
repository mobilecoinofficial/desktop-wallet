import { SjclCipherEncrypted } from 'sjcl';

export const UPDATE_PASSPHRASE = 'UPDATE_PASSPHRASE';

export type UpdatePassphraseAction = {
  payload: {
    encryptedPassphrase: SjclCipherEncrypted;
    secretKey: string;
  };
  type: 'UPDATE_PASSPHRASE';
};
