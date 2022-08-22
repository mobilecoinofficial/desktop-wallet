export interface ContactCardProps {
  recipientAddress: string;
  abbreviation: string;
  alias: string;
  color: string;
  isFavorite: boolean;
  onClickEdit: (x: string) => void;
}
