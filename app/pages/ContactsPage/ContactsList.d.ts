import Contact from '../../types/Contact';

export interface ContactsListProps {
  contactsList: Contact[];
  onAdd: () => void;
  onEdit: (x: string) => void;
}
