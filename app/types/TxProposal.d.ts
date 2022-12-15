import type { StringHex, StringUInt64, StringB58 } from './SpecialStrings';
import type { TransactionAmount } from './TransactionAmount';

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

export type InputTxo = {
  txoId: string;
  amount: TransactionAmount;
  subaddressIndex: StringUInt64;
  keyImage: string;
};

export type OutputTxo = {
  txoId: string;
  amount: TransactionAmount;
  recipientPublicAddressB58: StringB58;
  confirmationNumber: StringUInt64;
};

export interface TxProposal {
  inputTxos: InputTxo[];
  payloadTxos: OutputTxo[];
  changeTxos: OutputTxo[];
  feeAmount: TransactionAmount;
  tombstoneBlockIndex: StringUInt64;
  txProto: string;
}

type UnsignedInputTxo = {
  txOutProto: string;
  amount: TransactionAmount;
  subaddressIndex: string;
};

export interface UnsignedTxProposal {
  unsignedTxProtoBytesHex: string;
  unsignedInputTxos: UnsignedInputTxo[];
  payloadTxos: OutputTxo[];
  changeTxos: OutputTxo[];
}
