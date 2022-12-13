import type { StringB58 } from './SpecialStrings';

export interface Contact {
  id: string;
  abbreviation: string;
  alias: string;
  assignedAddress?: StringB58;
  color: string;
  isFavorite: boolean;
  recipientAddress: StringB58;
}
