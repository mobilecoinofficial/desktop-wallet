export interface ContactViewProps {
  abbreviation: string;
  addressCode: string;
  contactAlias: string;
  favoriteContact: boolean;
  onCancel: () => void;
  onSaved: () => void;
}
