import type { SjclCipherEncrypted } from 'sjcl';

import { UpdatePasswordAction, UPDATE_PASSWORD } from './type';

export const updatePasswordAction = (
  newEncryptedpassword: SjclCipherEncrypted,
  secretKey: string
): UpdatePasswordAction => ({
  payload: { encryptedpassword: newEncryptedpassword, secretKey },
  type: UPDATE_PASSWORD,
});
