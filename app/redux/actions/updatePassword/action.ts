import type { SjclCipherEncrypted } from 'sjcl';

import { UpdatePasswordAction, UPDATE_PASSWORD } from './type';

export const updatePasswordAction = (
  newEncryptedPassphrase: SjclCipherEncrypted,
  secretKey: string
): UpdatePasswordAction => ({
  payload: { encryptedPassphrase: newEncryptedPassphrase, secretKey },
  type: UPDATE_PASSWORD,
});
