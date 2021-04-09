export interface ContactCardProps {
  assignedAddress?: string;
  abbreviation: string;
  alias: string;
  color: string;
  isFavorite: boolean;
  onEdit: (x: string) => unknown;
}
