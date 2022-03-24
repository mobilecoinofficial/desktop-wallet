import type { SjclCipherEncrypted } from 'sjcl';

import { UpdatePasswordAction, UPDATE_PASSWORD } from './type';

export const updatePasswordAction = (
  newEncryptedPassword: SjclCipherEncrypted,
  secretKey: string
): UpdatePasswordAction => ({
  payload: { encryptedPassword: newEncryptedPassword, secretKey },
  type: UPDATE_PASSWORD,
});
