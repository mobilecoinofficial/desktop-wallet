import { encryptContacts } from '../../services';
import { Contact } from '../../types';
import { updateContactsAction } from '../actions';
import { store } from '../store';

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
