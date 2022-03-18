import { encryptContacts } from '../../../services';
import { Contact } from '../../../types';
import { store } from '../../store';
import { updateContactsAction } from './action';

const updateContacts = async (contacts: Contact[]): Promise<void> => {
  try {
    encryptContacts(contacts, store.getState().secretKey);
    store.dispatch(updateContactsAction(contacts));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateContacts;
export { updateContacts };
export type UpdateContactsService = typeof updateContacts;
