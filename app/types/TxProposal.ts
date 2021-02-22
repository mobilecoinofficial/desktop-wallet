import type {
  StringHex,
  StringUInt64,
} from './SpecialStrings';

type Amount = {
  commitment: StringHex;
  masked_value: StringUInt64;
};

type TxOut = {
  amount: Amount;
  e_fog_hint: StringHex;
  public_key: StringHex;
  target_key: StringHex;
};

type UnspentTxOut = {
  attempted_spend_height: StringUInt64;
  attempted_spend_tombstone: StringUInt64;
  key_image: StringHex;
  monitor_id: StringUInt64;
  subaddress_index: StringUInt64;
  tx_out: TxOut;
  value: StringUInt64;
};

type PublicAddress = {
  fog_authority_sig: StringHex;
  fog_report_id: string;
  fog_report_url: string;
  spend_public_key: StringHex;
  view_public_key: StringHex;
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
  hightest_index: StringUInt64;
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
  tombstone_block: StringUInt64;
};

type RingMLSAG = {
  c_zero: StringHex;
  key_image: StringHex;
  responses: StringHex[];
};

type SignatureRctBulletproofs ={
  pseudo_output_commitments: StringHex[];
  range_proofs: StringHex;
  ring_signatures: RingMLSAG;
};

type Tx = {
  prefix: TxPrefix;
  signature: SignatureRctBulletproofs;
};

export default interface TxoPropsal {
  fee: StringUInt64;
  input_list: UnspentTxOut[];
  outlay_confirmation_numbers: number[][];
  outlay_index_to_tx_out_index: StringUInt64[][];
  outlay_list: Outlay[];
  tx: Tx;
}
