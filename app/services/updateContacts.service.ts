import { store } from '../contexts/FullServiceContext';
import { updateContactsAction } from '../contexts/actions/updateContacts.action';
import encryptContacts from '../models/Contact/encryptContacts';
import type { Contact } from '../types/Contact.d';

const updateContacts = (contacts: Contact[]): void => {
  try {
    encryptContacts(contacts, store.state.secretKey);
    store.dispatch(updateContactsAction(contacts));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateContacts;
export { updateContacts };
