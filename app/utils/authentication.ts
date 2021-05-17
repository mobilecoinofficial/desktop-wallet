import { SjclCipherEncrypted } from 'sjcl';

import * as localStore from './LocalStore';
import argon2Key from './argon2Key';
import { decrypt, encrypt } from './encryption';

export const encryptAndStorePassphrase = async (
  passphrase: string
): Promise<{ encryptedPassphrase: SjclCipherEncrypted; secretKey: string }> => {
  const { secretKey } = await argon2Key(passphrase);

  const encryptedPassphrase = await encrypt(passphrase, secretKey);
  localStore.setEncryptedPassphrase(encryptedPassphrase);
  return { encryptedPassphrase, secretKey };
};

export const validatePassphrase = async (
  passphrase: string,
  encryptedPassphrase: SjclCipherEncrypted
): Promise<{ secretKey: string }> => {
  try {
    const { secretKey } = await argon2Key(passphrase);
    const decryptedPassphrase = await decrypt(encryptedPassphrase, secretKey);
    console.log(secretKey);
    console.log(passphrase);
    console.log(encryptedPassphrase);
    console.log(decryptedPassphrase);
    console.log(localStore.getEncryptedPassphrase());
    // This logic should be uncessary, but just in case the library changes.
    if (decryptedPassphrase === passphrase) {
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
