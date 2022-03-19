import { updateContactsAction } from '../contexts/actions/updateContacts.action';
import { store } from '../redux/store';
import type { Contact } from '../types/Contact.d';
import { encryptContacts } from './encryptContacts.service';

export const updateContacts = async (contacts: Contact[]): Promise<void> => {
  try {
    encryptContacts(contacts, store.getState().secretKey);
    store.dispatch(updateContactsAction(contacts));
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type UpdateContactsService = typeof updateContacts;
