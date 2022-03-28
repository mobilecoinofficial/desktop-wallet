import type { Contact } from '../types/Contact';
import * as localStore from '../utils/LocalStore';
import { encrypt } from '../utils/encryption';

export const encryptContacts = async (contacts: Contact[], secretKey: string): Promise<void> => {
  const contactsStringified = JSON.stringify(contacts);
  const encryptedContacts = await encrypt(contactsStringified, secretKey);
  localStore.setEncryptedContacts(encryptedContacts);
};

export type EncryptContactsService = typeof encryptContacts;
