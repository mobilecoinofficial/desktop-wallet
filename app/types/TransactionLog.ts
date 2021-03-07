import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface TransactionLog {
  accountId: StringHex;
  assignedAddressId: StringB58;
  changeTxoIds: StringHex[];
  comment: string;
  direction: 'tx_direction_received' | 'tx_direction_sent';
  failureCode: number | null;
  failureMessage: string | null;
  feePmob: StringUInt64 | null;
  finalizedBlockIndex: StringUInt64 | null;
  inputTxoIds: StringHex[];
  isSentRecovered: boolean | null;
  object: 'transaction_log';
  offsetCount: number;
  outputTxoIds: StringHex[];
  recipientAddressId: StringB58 | null;
  sentTime: string | null; // FIX-ME: Confirm type
  status: 'tx_status_built' | 'tx_status_pending' | 'tx_status_received' | 'tx_status_succeded' | 'tx_status_failed';
  submittedBlockIndex: StringUInt64 | null;
  transactionLogId: StringHex;
  valuePmob: StringUInt64;
}
