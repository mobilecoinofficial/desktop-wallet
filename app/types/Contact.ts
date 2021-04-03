import type { StringB58 } from './SpecialStrings';

export default interface Contact {
  abbreviation: string;
  alias: string;
  assignedAddress: StringB58;
  color?: string;
  isFavorite: boolean;
  recipientAddress?: StringB58;
}
