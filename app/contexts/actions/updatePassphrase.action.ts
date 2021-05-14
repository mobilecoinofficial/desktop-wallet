import type { SjclCipherEncrypted } from 'sjcl';

export const UPDATE_PASSPHRASE = 'UPDATE_PASSPHRASE';

export type UpdatePassphraseActionType = {
  payload: {
    encryptedPassphrase: SjclCipherEncrypted;
  };
  type: 'UPDATE_PASSPHRASE';
};

export const updatePassphraseAction = (
  newEncryptedPassphrase: SjclCipherEncrypted
): UpdatePassphraseActionType => ({
  payload: { encryptedPassphrase: newEncryptedPassphrase },
  type: UPDATE_PASSPHRASE,
});
