import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export interface Address {
  // A b58 encoding of the public address materials.
  // The public_address is the unique identifier for the address.
  publicAddressB58: StringB58;

  // The account which owns this address.
  accountId: StringHex;

  // Additional data associated with this address.
  metadata: string;

  // The index of this address in the subaddress space for the account.
  subaddressIndex: StringUInt64;
}

export type Addresses = {
  addressIds: StringHex[];
  addressMap: { [addressId: string]: Address };
};
