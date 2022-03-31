import { encryptContacts } from '../../services';
import { Contact } from '../../types';
import { errorToString } from '../../utils/errorHandler';
import { updateContactsAction } from '../actions';
import { store } from '../store';

export const updateContacts = async (contacts: Contact[]): Promise<void> => {
  try {
    encryptContacts(contacts, store.getState().secretKey);
    store.dispatch(updateContactsAction(contacts));
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};
