import type { Contact } from './Contact';
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export interface TransactionAbbreviation {
  recipientAddressId: StringB58 | null;
  txoIdHex: StringHex;
  valuePmob: StringUInt64;
}

export interface TransactionLog {
  accountId: StringHex;
  assignedAddressId: StringB58;
  changeTxoIds: StringHex[]; // FK this is gone?
  changeTxos: TransactionAbbreviation[];
  comment: string;
  contact?: Contact; // FIX-ME this is not from the full-service API, we should remove.
  direction: 'tx_direction_received' | 'tx_direction_sent';
  failureCode: number | null;
  failureMessage: string | null;
  feePmob: StringUInt64 | null;
  finalizedBlockIndex: StringUInt64 | null;
  inputTxoIds: StringHex[]; // FK this is gone?
  inputTxos: TransactionAbbreviation[];
  isSentRecovered: boolean | null;
  object: 'transaction_log';
  offsetCount: number;
  outputTxoIds: StringHex[]; // FK this is gone?
  outputTxos: TransactionAbbreviation[];
  recipientAddressId: StringB58 | null; // FK this is gone?
  sentTime: string | null; // FIX-ME: Confirm type
  status:
    | 'tx_status_built'
    | 'tx_status_pending'
    | 'tx_status_received'
    | 'tx_status_succeeded'
    | 'tx_status_failed';
  submittedBlockIndex: StringUInt64 | null;
  transactionLogId: StringHex;
  valuePmob: StringUInt64;
}

export type TransactionLogs = {
  transactionLogIds: StringHex[];
  transactionLogMap: { [transactionLogId: string]: TransactionLog };
};
