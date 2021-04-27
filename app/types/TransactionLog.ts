import Contact from './Contact';
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';
import type TxoAbbrev from './TxoAbbrev';

export default interface TransactionLog {
  accountId: StringHex;
  assignedAddressId: StringB58;
  changeTxos: TxoAbbrev[];
  comment: string;
  contact?: Contact; // FIX-ME this is not from the full-service API, we should remove.
  direction: 'tx_direction_received' | 'tx_direction_sent';
  failureCode: number | null;
  failureMessage: string | null;
  feePmob: StringUInt64 | null;
  finalizedBlockIndex: StringUInt64 | null;
  inputTxos: TxoAbbrev[];
  isSentRecovered: boolean | null;
  object: 'transaction_log';
  offsetCount: number;
  outputTxos: TxoAbbrev[];
  recipientAddressId: StringB58 | null;
  sentTime: string | null; // FIX-ME: Confirm type
  status:
    | 'tx_status_built'
    | 'tx_status_pending'
    | 'tx_status_received'
    | 'tx_status_succeded'
    | 'tx_status_failed';
  submittedBlockIndex: StringUInt64 | null;
  transactionLogId: StringHex;
  valuePmob: StringUInt64;
}

export type TransactionLogs = {
  transactionLogIds: StringHex[];
  transactionLogMap: { [transactionLogId: string]: TransactionLog };
};
