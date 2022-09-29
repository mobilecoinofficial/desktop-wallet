import type { Contact } from '../../../types/Contact.d';

export interface ContactFormProps {
  abbreviation?: string;
  alias?: string;
  assignedAddress?: string;
  color?: string;
  id?: string;
  isFavorite?: boolean;
  recipientAddress?: string;
  onClickCancel: () => void;
  onClickDelete?: () => void;
  onClickSaved: (x: Contact) => void;
}
