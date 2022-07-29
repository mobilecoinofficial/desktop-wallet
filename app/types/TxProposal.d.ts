import { TransactionAmount } from '../fullService/api/buildTransaction';
import type { StringHex, StringUInt64, StringB58 } from './SpecialStrings';

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

type InputTxo = {
  txOutProto: string;
  amount: TransactionAmount;
  subaddressIndex: StringUInt64;
  keyImage: string;
};

type OutputTxo = {
  txOutProto: string;
  amount: TransactionAmount;
  recipient_public_address_b58: StringB58;
  confirmation_number: StringUInt64;
};

export interface TxProposal {
  inputTxos: InputTxo[];
  payloadTxos: OutputTxo[];
  changeTxos: OutputTxo[];
  feeAmount: TransactionAmount;
  tombstoneBlockIndex: StringUInt64;
  txProto: string;
}
