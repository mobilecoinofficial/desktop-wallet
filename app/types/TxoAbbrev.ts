import type { StringHex, StringUInt64 } from './SpecialStrings';

export default interface TxoAbbrev {
  object: 'txoAbbrev';
  recipientAddressId: StringHex;
  txoIdHex: StringHex;
  valuePmob: StringUInt64;
}
