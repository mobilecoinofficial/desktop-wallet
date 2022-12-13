export interface ContactCardProps {
  abbreviation: string;
  alias: string;
  color: string;
  isFavorite: boolean;
  id: string;
  onClickEdit: (x: string) => void;
}
