import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface GiftCode {
  accountId: StringHex;
  entropy: StringHex;
  giftCodeB58: StringB58;
  memo: string;
  object: 'gift_code';
  txoId: StringHex;
  valuePmob: StringUInt64;
}
