import type { Contact } from '../types/Contact';
import * as localStore from '../utils/LocalStore';
import { decrypt } from '../utils/encryption';

export const decryptContacts = async (secretKey: string): Promise<Contact[]> => {
  const encryptedContacts = localStore.getEncryptedContacts();
  if (encryptedContacts === undefined) {
    return [];
  }

  const contactsStringified = await decrypt(encryptedContacts, secretKey);
  return JSON.parse(contactsStringified) as Contact[];
};

export type DecryptContactsService = typeof decryptContacts;
