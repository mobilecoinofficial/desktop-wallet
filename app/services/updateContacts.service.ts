import { store } from '../contexts/FullServiceContext';
import { updateContactsAction } from '../contexts/actions/updateContacts.action';
import type { Contact } from '../types/Contact.d';
import { encryptContacts } from './encryptContacts.service';

const updateContacts = async (contacts: Contact[]): Promise<void> => {
  try {
    encryptContacts(contacts, store.state.secretKey);
    store.dispatch(updateContactsAction(contacts));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateContacts;
export { updateContacts };
export type UpdateContactsService = typeof updateContacts;
