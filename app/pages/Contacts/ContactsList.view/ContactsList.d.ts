import type { Contact } from '../../../types/Contact.d';

export interface ContactsListProps {
  contactsList: Contact[];
  onAdd: () => void;
  onEdit: (x: string) => void;
}
