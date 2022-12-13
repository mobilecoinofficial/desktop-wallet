import type { StringB58, StringUInt64 } from './SpecialStrings';

export type TransactionAmount = {
  value: StringUInt64;
  tokenId: StringUInt64;
};

export type AddressAndAmount = [StringB58, TransactionAmount];
