export interface ContactViewProps {
  abbreviation?: string;
  recipientAddress?: string;
  alias?: string;
  isFavorite?: boolean;
  onCancel: () => void;
  onDelete?: () => void;
  onSaved: () => void;
}
