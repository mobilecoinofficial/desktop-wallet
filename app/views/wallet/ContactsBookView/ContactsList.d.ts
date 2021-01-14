import Contact from '../../../types/Contact';

export interface ContactsListProps {
  contactsList: Contact[];
  onAdd: () => unknown;
  onEdit: () => unknown;
}
