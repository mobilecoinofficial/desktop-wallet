import type { StringB58 } from './SpecialStrings';

export default interface Contact {
  abbreviation: string;
  alias: string;
  assignedAddress: StringB58;
  isFavorite: boolean;
  recipientAddress?: StringB58;
}
