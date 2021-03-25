export interface ContactViewProps {
  abbreviation?: string;
  alias?: string;
  assignedAddress?: string;
  isFavorite?: boolean;
  recipientAddress?: string;
  onCancel: () => void;
  onDelete?: (x: unknown) => void;
  onSaved: (x: unknown) => void;
}
