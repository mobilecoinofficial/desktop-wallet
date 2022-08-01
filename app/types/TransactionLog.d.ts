import { TransactionAmount } from '../fullService/api/buildTransaction';
import type { Contact } from './Contact';
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';
import type { InputTxo, OutputTxo } from './TxProposal';

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
  status: Status;
  submittedBlockIndex: StringUInt64 | null;
  transactionLogId: StringHex;
  valuePmob: StringUInt64;
}

type Status =
  | 'tx_status_built'
  | 'tx_status_pending'
  | 'tx_status_received'
  | 'tx_status_succeded'
  | 'tx_status_failed';

export interface TransactionLogFromFullServiceV2 {
  // Unique identifier for the transaction log. This value is not associated
  // to the ledger, but derived from the tx.
  id: string;
  // Unique identifier for the assigned associated account. If the
  // transaction is outgoing, this account is from whence the txo came. If
  // received, this is the receiving account.
  accountId: StringHex;
  // A list of the Txos which were inputs to this transaction.
  inputTxos: InputTxo[];
  // A list of the Txos which were outputs from this transaction.
  outputTxos: OutputTxo[];
  // A list of the Txos which were change in this transaction.
  changeTxos: OutputTxo[];
  valueMap: {
    [TokenId: StringUInt64]: StringUInt64;
  };
  feeAmount: TransactionAmount;
  // The block index of the highest block on the network at the time the
  // transaction was submitted.
  submittedBlockIndex: StringUInt64 | null;
  tombstoneBlockIndex: StringUInt64 | null;
  //  The scanned block block index in which this transaction occurred.
  finalizedBlockIndex: StringUInt64 | null;
  // String representing the transaction log status. On "sent", valid
  // statuses are "built", "pending", "succeeded", "failed".  On "received",
  // the status is "succeeded".
  status: 'built' | 'succeeded' | 'pending' | 'failed'; // FIX-ME make this an enum
  // Time at which sent transaction log was created. Only available if
  // direction is "sent". This value is null if "received" or if the sent
  // transactions were recovered from the ledger (is_sent_recovered = true).
  sentTime: string | null;
  // An arbitrary string attached to the object.
  comment: string;
}

export type TransactionLogs = {
  transactionLogIds: StringHex[];
  transactionLogMap: { [transactionLogId: string]: TransactionLog };
};

export type TransactionLogsFromV2 = {
  transactionLogIds: StringHex[];
  transactionLogMap: { [transactionLogId: string]: TransactionLogFromFullServiceV2 };
};
