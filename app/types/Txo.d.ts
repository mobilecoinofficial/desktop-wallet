import type { StringHex, StringUInt64 } from './SpecialStrings';

export interface Txo {
  eFogHint: StringHex;
  keyImage: StringHex | null;
  publicKey: StringHex;
  spentBlockIndex: StringUInt64 | null;
  subaddressIndex: StringUInt64 | null;
  targetKey: StringHex;
  txoId: StringHex;
  valuePmob: StringUInt64;
}

export interface TxoV2 {
  // Unique identifier for the Txo. Constructed from the contents of the
  // TxOut in the ledger representation.
  id: StringHex;
  // the txo's value
  value: StringUInt64;
  // the txo's token id
  tokenId: StringUInt64;
  // Block index in which the txo was received by an account.
  receivedBlockIndex?: StringUInt64;
  // Block index in which the txo was spent by an account.
  spentBlockIndex?: StringUInt64;
  // The account_id for the account which has received this TXO. This account
  // has spend authority.
  accountId?: StringHex;
  // The status of this txo
  status: 'unspent' | 'pending' | 'spent' | 'secreted' | 'orphaned';
  // A cryptographic key for this Txo.
  targetKey: StringHex;
  // The public key for this txo, can be used as an identifier to find the
  // txo in the ledger.
  publicKey: StringHex;
  // The encrypted fog hint for this Txo.
  eFogHint: StringHex;
  // The assigned subaddress index for this Txo with respect to its received
  // account.
  subaddressIndex?: StringUInt64;
  // A fingerprint of the txo derived from your private spend key materials,
  // required to spend a Txo.
  keyImage?: StringHex;
  // A confirmation number that the sender of the Txo can provide to verify
  // that they participated in the construction of this Txo.
  confirmation?: StringUInt64;
}

export type Txos = {
  txoIds: StringHex[];
  txoMap: { [txoId: string]: Txo };
};
