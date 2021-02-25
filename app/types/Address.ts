import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface Address {
  accountId: StringHex;
  addressBookEntryId: number | null;
  addressId: StringB58;
  comment: string;
  offsetCount: number;
  publicAddress: StringB58;
  subaddressIndex: StringUInt64;
}
