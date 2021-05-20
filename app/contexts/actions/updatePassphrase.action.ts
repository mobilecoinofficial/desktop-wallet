import type { SjclCipherEncrypted } from 'sjcl';

export const UPDATE_PASSPHRASE = 'UPDATE_PASSPHRASE';

export type UpdatePassphraseActionType = {
  payload: {
    encryptedPassphrase: SjclCipherEncrypted;
    secretKey: string;
  };
  type: 'UPDATE_PASSPHRASE';
};

export const updatePassphraseAction = (
  newEncryptedPassphrase: SjclCipherEncrypted,
  secretKey: string
): UpdatePassphraseActionType => ({
  payload: { encryptedPassphrase: newEncryptedPassphrase, secretKey },
  type: UPDATE_PASSPHRASE,
});
