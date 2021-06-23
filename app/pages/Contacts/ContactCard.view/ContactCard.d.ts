export interface ContactCardProps {
  assignedAddress?: string;
  abbreviation: string;
  alias: string;
  color: string;
  isFavorite: boolean;
  onClickEdit: (x: string) => void;
}
