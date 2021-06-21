import type { Contact } from '../../../types/Contact.d';

export interface ContactsListProps {
  contactsList: Contact[];
  onClickAdd: () => void;
  onClickEdit: (x: string) => void;
}
