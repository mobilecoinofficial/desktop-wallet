import type {
  TransactionLog,
  TransactionLogFromFullServiceV2,
  Status,
  TransactionAbbreviation,
  TransactionLogs,
  TransactionLogsFromV2,
} from '../../types/TransactionLog.d';
import type { InputTxo, OutputTxo } from '../../types/TxProposal';

export function matchStatus(status: 'built' | 'succeeded' | 'pending' | 'failed'): Status {
  switch (status) {
    case 'built':
      return 'tx_status_built';
    case 'succeeded':
      return 'tx_status_succeded';
    case 'pending':
      return 'tx_status_pending';
    case 'failed':
      return 'tx_status_failed';
    default:
      return 'tx_status_failed';
  }
}

export function mapTxoToAbbreviation(txo: InputTxo | OutputTxo): TransactionAbbreviation {
  let address = null;

  if ('recipientPublicAddressB58' in txo) {
    address = txo.recipientPublicAddressB58;
  }

  return {
    recipientAddressId: address,
    txoIdHex: txo.txOutProto,
    valuePmob: txo.amount.value,
  };
}

export function convertV2TransactionLogToWalletTransactionLog(
  v2TransactionLog: TransactionLogFromFullServiceV2
): TransactionLog {
  const assignedAddressId = v2TransactionLog.outputTxos[0].recipientPublicAddressB58;

  const direction = 'tx_direction_received'; // FIX-ME TODO find out how to calculate this field

  return {
    accountId: v2TransactionLog.accountId,
    assignedAddressId,
    changeTxoIds: v2TransactionLog.changeTxos.map((t) => t.txOutProto),
    changeTxos: v2TransactionLog.changeTxos.map((t) => mapTxoToAbbreviation(t)),
    comment: v2TransactionLog.comment,
    contact: undefined,
    direction,
    failureCode: null,
    failureMessage: null,
    feePmob: v2TransactionLog.feeAmount.value,
    finalizedBlockIndex: v2TransactionLog.finalizedBlockIndex,
    inputTxoIds: v2TransactionLog.inputTxos.map((t) => t.txOutProto),
    inputTxos: v2TransactionLog.inputTxos.map((t) => mapTxoToAbbreviation(t)),
    isSentRecovered: null, // FIX-ME TODO find out how to calc this field
    object: 'transaction_log',
    offsetCount: 0,
    outputTxoIds: v2TransactionLog.outputTxos.map((t) => t.txOutProto),
    outputTxos: v2TransactionLog.outputTxos.map((t) => mapTxoToAbbreviation(t)),
    recipientAddressId: assignedAddressId, // FIX-ME TODO is this correct?
    sentTime: v2TransactionLog.sentTime,
    status: matchStatus(v2TransactionLog.status),
    submittedBlockIndex: v2TransactionLog.submittedBlockIndex,
    transactionLogId: v2TransactionLog.id,
    valuePmob: v2TransactionLog.valueMap[0],
  };
}

export function convertTransactionLogsResponseFromV2(
  transactionlogs: TransactionLogsFromV2
): TransactionLogs {
  return {
    transactionLogIds: transactionlogs.transactionLogIds,
    transactionLogMap: Object.keys(transactionlogs.transactionLogMap).reduce(
      (accum: { [transactionLogId: string]: TransactionLog }, key) => ({
        ...accum,
        [key]: convertV2TransactionLogToWalletTransactionLog(
          transactionlogs.transactionLogMap[key]
        ),
      }),
      {}
    ),
  };
}
