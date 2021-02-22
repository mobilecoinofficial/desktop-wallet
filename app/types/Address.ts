import type { StringB58, StringUInt64 } from './SpecialStrings';

export default interface Address {
  account_id: StringB58;
  address_book_entry_id: number | null;
  address_id: StringB58;
  comment: string;
  object: 'assigned_address';
  offset_count: number;
  public_address: StringB58;
  subaddress_index: StringUInt64;
}
