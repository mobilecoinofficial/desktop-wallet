import { StringHex } from './SpecialStrings';

export interface Confirmation {
  txoIdHex: StringHex;
  txoIndex: StringHex;
  confirmation: StringHex;
}

export type Confirmations = Confirmation[];
