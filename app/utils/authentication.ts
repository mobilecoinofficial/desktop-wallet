import { SjclCipherEncrypted } from 'sjcl';

import * as localStore from './LocalStore';
import { argon2Key } from './argon2Key';
import { decrypt, encrypt } from './encryption';

export const encryptAndStorePassword = async (
  password: string
): Promise<{ encryptedPassword: SjclCipherEncrypted; secretKey: string }> => {
  const { secretKey } = await argon2Key(password);

  const encryptedPassword = await encrypt(password, secretKey);
  localStore.setEncryptedPassword(encryptedPassword);
  return { encryptedPassword, secretKey };
};

export const validatePassword = async (
  password: string,
  encryptedPassword: SjclCipherEncrypted
): Promise<{ secretKey: string }> => {
  try {
    const { secretKey } = await argon2Key(password);
    const decryptedPassword = await decrypt(encryptedPassword, secretKey);

    // This logic should be uncessary, but just in case the library changes.
    if (decryptedPassword === password) {
      return { secretKey };
    }
    throw new Error('Invalid Password');
  } catch (e) {
    if (e.message === "ccm: tag doesn't match") {
      throw new Error('Invalid Password');
    } else {
      throw new Error(e.message);
    }
  }
};
