import { Contact } from '../../../types';

export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';

export type UpdateContactsAction = {
  payload: {
    contacts: Contact[];
  };
  type: 'UPDATE_CONTACTS';
};
