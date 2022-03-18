import type { SjclCipherEncrypted } from 'sjcl';

import { UpdatePassphraseAction, UPDATE_PASSPHRASE } from './type';

export const updatePassphraseAction = (
  newEncryptedPassphrase: SjclCipherEncrypted,
  secretKey: string
): UpdatePassphraseAction => ({
  payload: { encryptedPassphrase: newEncryptedPassphrase, secretKey },
  type: UPDATE_PASSPHRASE,
});
