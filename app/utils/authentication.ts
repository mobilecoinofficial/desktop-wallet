import { SjclCipherEncrypted } from 'sjcl';

import * as localStore from './LocalStore';
import argon2Key from './argon2Key';
import { decrypt, encrypt } from './encryption';

export const encryptAndStorepassword = async (
  password: string
): Promise<{ encryptedpassword: SjclCipherEncrypted; secretKey: string }> => {
  const { secretKey } = await argon2Key(password);

  const encryptedpassword = await encrypt(password, secretKey);
  localStore.setEncryptedpassword(encryptedpassword);
  return { encryptedpassword, secretKey };
};

export const validatepassword = async (
  password: string,
  encryptedpassword: SjclCipherEncrypted
): Promise<{ secretKey: string }> => {
  try {
    const { secretKey } = await argon2Key(password);
    const decryptedpassword = await decrypt(encryptedpassword, secretKey);

    // This logic should be uncessary, but just in case the library changes.
    if (decryptedpassword === password) {
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
