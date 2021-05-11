import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export interface Address {
  accountId: StringHex;
  addressBookEntryId: number | null;
  addressId: StringB58;
  metadata: string;
  object: 'address';
  offsetCount: number;
  publicAddress: StringB58;
  subaddressIndex: StringUInt64;
}

export type Addresses = {
  addressIds: StringHex[];
  addressMap: { [addressId: string]: Address };
};
