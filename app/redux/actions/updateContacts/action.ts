import { Contact } from '../../../types';
import { UpdateContactsAction, UPDATE_CONTACTS } from './type';

export const updateContactsAction = (contacts: Contact[]): UpdateContactsAction => ({
  payload: {
    contacts,
  },
  type: UPDATE_CONTACTS,
});
