import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface TransactionLog {
  accountId: StringHex;
  assignedAddressId: StringB58;
  changeTxoIds: StringHex[];
  comment: string;
  direction: 'received' | 'sent';
  failureCode: number | null;
  failureMessage: string | null;
  feePmob: StringUInt64 | null;
  finalizedBlockHeight: StringUInt64 | null;
  inputTxoIds: StringHex[];
  isSentRecovered: boolean | null;
  object: 'transaction_log';
  offsetCount: number;
  outputTxoIds: StringHex[];
  recipientAddressId: StringB58 | null;
  sentTime: string | null; // FIX-ME: Confirm type
  status: 'built' | 'pending' | 'received' | 'succeded' | 'failed';
  submittedBlockHeight: StringUInt64 | null;
  transactionLogId: StringHex;
  valuePmob: StringUInt64;
}
