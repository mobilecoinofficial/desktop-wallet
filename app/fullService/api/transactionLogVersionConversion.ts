import { TokenIds } from '../../constants/app';
import { StringB58 } from '../../types';
import type {
  TransactionLog,
  TransactionLogV2,
  Status,
  TransactionAbbreviation,
  TransactionLogs,
  TransactionLogsFromV2,
} from '../../types/TransactionLog';
import type { InputTxo, OutputTxo } from '../../types/TxProposal';
import type { TxosV2, TxoV2 } from '../../types/Txo.d';

export function matchStatus(status: string): Status {
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
      return 'tx_status_unknown';
  }
}

export function mapTxoToAbbreviation(txo: InputTxo | OutputTxo): TransactionAbbreviation {
  let address = null;

  if ('recipientPublicAddressB58' in txo) {
    address = txo.recipientPublicAddressB58;
  }

  return {
    recipientAddressId: address,
    txoIdHex: txo.txoIdHex,
    valuePmob: txo.amount.value,
  };
}

export function mapTxoV2ToAbbreviation(txo: TxoV2): TransactionAbbreviation {
  return {
    recipientAddressId: null,
    txoIdHex: txo.id,
    valuePmob: txo.value,
  };
}

export function convertTransactionLogFromV2(v2TransactionLog: TransactionLogV2): TransactionLog {
  const assignedAddressId = v2TransactionLog.outputTxos[0].recipientPublicAddressB58;
  const direction = 'tx_direction_sent';

  return {
    accountId: v2TransactionLog.accountId,
    assignedAddressId,
    changeTxoIds: v2TransactionLog.changeTxos.map((t) => t.txoIdHex),
    changeTxos: v2TransactionLog.changeTxos.map((t) => mapTxoToAbbreviation(t)),
    comment: v2TransactionLog.comment,
    contact: undefined,
    direction,
    failureCode: null,
    failureMessage: null,
    feePmob: v2TransactionLog.feeAmount.value,
    finalizedBlockIndex: v2TransactionLog.finalizedBlockIndex,
    inputTxoIds: v2TransactionLog.inputTxos.map((t) => t.txoIdHex),
    inputTxos: v2TransactionLog.inputTxos.map((t) => mapTxoToAbbreviation(t)),
    object: 'transaction_log',
    offsetCount: 0,
    outputTxoIds: v2TransactionLog.outputTxos.map((t) => t.txoIdHex),
    outputTxos: v2TransactionLog.outputTxos.map((t) => mapTxoToAbbreviation(t)),
    recipientAddressId: assignedAddressId,
    sentTime: v2TransactionLog.sentTime,
    status: matchStatus(v2TransactionLog.status),
    submittedBlockIndex: v2TransactionLog.submittedBlockIndex,
    transactionLogId: v2TransactionLog.id,
    valuePmob: v2TransactionLog.valueMap[TokenIds.MOB],
  };
}

export function convertTransactionLogsResponseFromV2(
  transactionlogs: TransactionLogsFromV2
): TransactionLogs {
  return {
    transactionLogIds: transactionlogs.transactionLogIds,
    transactionLogMap: transactionlogs.transactionLogIds.reduce(
      (accum: { [transactionLogId: string]: TransactionLog }, key) => ({
        ...accum,
        [key]: convertTransactionLogFromV2(transactionlogs.transactionLogMap[key]),
      }),
      {}
    ),
  };
}

function convertTxoToTransactionLog(
  txo: TxoV2,
  accountId: StringB58,
  address: StringB58
): TransactionLog {
  return {
    accountId,
    assignedAddressId: address,
    changeTxoIds: [],
    changeTxos: [],
    comment: '',
    contact: undefined,
    direction: 'tx_direction_received',
    failureCode: null,
    failureMessage: null,
    feePmob: null,
    finalizedBlockIndex: txo.receivedBlockIndex ?? null,
    inputTxoIds: [],
    inputTxos: [],
    object: 'transaction_log',
    offsetCount: 0,
    outputTxoIds: [txo.id],
    outputTxos: [mapTxoV2ToAbbreviation(txo)],
    recipientAddressId: address,
    sentTime: null,
    status: matchStatus(txo.status),
    submittedBlockIndex: null,
    transactionLogId: txo.id,
    valuePmob: txo.value,
  };
}

export function convertTxosToTransactionLogs(
  txos: TxosV2,
  accountId: StringB58,
  address: StringB58
): TransactionLogs {
  return {
    transactionLogIds: txos.txoIds,
    transactionLogMap: txos.txoIds.reduce(
      (accum: { [transactionLogId: string]: TransactionLog }, key) => ({
        ...accum,
        [key]: convertTxoToTransactionLog(txos.txoMap[key], accountId, address),
      }),
      {}
    ),
  };
}
