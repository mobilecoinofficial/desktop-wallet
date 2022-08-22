import type { StringHex, StringUInt64 } from './SpecialStrings';

type Amount = {
  commitment: StringHex;
  maskedValue: StringUInt64;
};

type TxOut = {
  amount: Amount;
  eFogHint: StringHex;
  publicKey: StringHex;
  targetKey: StringHex;
};

type UnspentTxOut = {
  attemptedSpendHeight: StringUInt64;
  attemptedSpendTombstone: StringUInt64;
  keyImage: StringHex;
  monitorId: StringUInt64;
  subaddressIndex: StringUInt64;
  txOut: TxOut;
  value: StringUInt64;
};

type PublicAddress = {
  fogAuthoritySig: StringHex;
  fogReportId: string;
  fogReportUrl: string;
  spendPublicKey: StringHex;
  viewPublicKey: StringHex;
};

type Outlay = {
  receiver: PublicAddress;
  value: StringUInt64;
};

type Range = {
  from: StringUInt64;
  to: StringUInt64;
};

type TxOutMembershipElement = {
  hash: StringHex;
  range: Range;
};

type TxOutMembershipProof = {
  elements: TxOutMembershipElement[];
  hightestIndex: StringUInt64;
  index: StringUInt64;
};

type TxIn = {
  ring: TxOut[];
  proofs: TxOutMembershipProof[];
};

type TxPrefix = {
  fee: StringUInt64;
  inputs: TxIn[];
  outputs: TxOut[];
  tombstoneBlock: StringUInt64;
};

type RingMLSAG = {
  cZero: StringHex;
  keyImage: StringHex;
  responses: StringHex[];
};

type SignatureRctBulletproofs = {
  pseudoOutputCommitments: StringHex[];
  rangeProofs: StringHex;
  ringSignatures: RingMLSAG;
};

type Tx = {
  prefix: TxPrefix;
  signature: SignatureRctBulletproofs;
};

// TODO decide if i want to convert to camelCase, or even ignore the unused type
export interface TxProposal {
  fee: StringUInt64;
  inputList: UnspentTxOut[];
  outlayConfirmationNumbers: number[][];
  outlayIndexToTxOutIndex: StringUInt64[][];
  outlayList: Outlay[];
  tx: Tx;
}
