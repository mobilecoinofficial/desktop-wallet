import type { Contact } from '../../types/Contact.d';
import * as localStore from '../../utils/LocalStore';
import { decrypt } from '../../utils/encryption';

const decryptContacts = async (secretKey: string): Promise<Contact[]> => {
  const encryptedContacts = localStore.getEncryptedContacts();
  if (encryptedContacts === undefined) {
    return [];
  }

  const contactsStringified = await decrypt(encryptedContacts, secretKey);

  return JSON.parse(contactsStringified) as Contact[];
};

export default decryptContacts;
