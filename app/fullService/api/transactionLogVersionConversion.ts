import { Addresses, StringB58 } from '../../types';
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
    case 'spent':
      return 'tx_status_spent';
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

export function mapTxoV2ToAbbreviation(txo: TxoV2, address: string): TransactionAbbreviation {
  return {
    recipientAddressId: address,
    txoIdHex: txo.id,
    valuePmob: txo.value,
  };
}

// all transaction logs are sent txos
export function convertTransactionLogFromV2(v2TransactionLog: TransactionLogV2): TransactionLog {
  const direction = 'tx_direction_sent';
  // assuming one token type per transaction. safe assumption for now. Will not be at some point in the future
  const tokenId = Number(v2TransactionLog.outputTxos[0].amount.tokenId);

  return {
    accountId: v2TransactionLog.accountId,
    address: v2TransactionLog.outputTxos[0].recipientPublicAddressB58,
    changeTxoIds: v2TransactionLog.changeTxos.map((t) => t.txoIdHex),
    changeTxos: v2TransactionLog.changeTxos.map((t) => mapTxoToAbbreviation(t)),
    comment: v2TransactionLog.comment,
    contact: undefined,
    direction,
    failureCode: null,
    failureMessage: null,
    fee: v2TransactionLog.feeAmount.value,
    finalizedBlockIndex: v2TransactionLog.finalizedBlockIndex,
    inputTxoIds: v2TransactionLog.inputTxos.map((t) => t.txoIdHex),
    inputTxos: v2TransactionLog.inputTxos.map((t) => mapTxoToAbbreviation(t)),
    object: 'transaction_log',
    offsetCount: 0,
    outputTxoIds: v2TransactionLog.outputTxos.map((t) => t.txoIdHex),
    outputTxos: v2TransactionLog.outputTxos.map((t) => mapTxoToAbbreviation(t)),
    sentTime: v2TransactionLog.sentTime,
    status: matchStatus(v2TransactionLog.status),
    submittedBlockIndex: v2TransactionLog.submittedBlockIndex,
    tokenId,
    transactionLogId: v2TransactionLog.id,
    value: v2TransactionLog.valueMap[tokenId],
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

// all txos are received txos
function convertTxoToTransactionLog(
  txo: TxoV2,
  accountId: StringB58,
  addresses: Addresses
): TransactionLog {
  let address;
  address = Object.values(addresses.addressMap).find(
    (a) => a.subaddressIndex === txo.subaddressIndex
  )?.publicAddressB58;

  if (!address) {
    console.warn(`no address match for subaddress index for txo id ${txo.id}`);
    address =
      Object.values(addresses.addressMap).find((a) => a.subaddressIndex === '0')
        ?.publicAddressB58 || '';
  }

  return {
    accountId,
    address,
    changeTxoIds: [],
    changeTxos: [],
    comment: '',
    contact: undefined,
    direction: 'tx_direction_received',
    failureCode: null,
    failureMessage: null,
    fee: null,
    finalizedBlockIndex: txo.receivedBlockIndex ?? null,
    inputTxoIds: [],
    inputTxos: [],
    object: 'transaction_log',
    offsetCount: 0,
    outputTxoIds: [txo.id],
    outputTxos: [mapTxoV2ToAbbreviation(txo, address)],
    sentTime: null,
    status: matchStatus(txo.status),
    subaddressIndex: txo.subaddressIndex,
    submittedBlockIndex: null,
    tokenId: Number(txo.tokenId),
    transactionLogId: txo.id,
    value: txo.value,
  };
}

export function convertTxosToTransactionLogs(
  txos: TxosV2,
  accountId: StringB58,
  addresses: Addresses
): TransactionLogs {
  return {
    transactionLogIds: txos.txoIds,
    transactionLogMap: txos.txoIds.reduce(
      (accum: { [transactionLogId: string]: TransactionLog }, key) => ({
        ...accum,
        [key]: convertTxoToTransactionLog(txos.txoMap[key], accountId, addresses),
      }),
      {}
    ),
  };
}
