import type { Contact } from '../../types/Contact.d';

export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';

export type UpdateContactsActionType = {
  payload: {
    contacts: Contact[];
  };
  type: 'UPDATE_CONTACTS';
};

export const updateContactsAction = (contacts: Contact[]): UpdateContactsActionType => ({
  payload: {
    contacts,
  },
  type: UPDATE_CONTACTS,
});
