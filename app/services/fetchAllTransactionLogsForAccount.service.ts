import * as fullServiceApi from '../fullService/api';
import type { StringHex } from '../types/SpecialStrings';
import type { TransactionAbbreviation, TransactionLogs } from '../types/TransactionLog';

export const fetchAllTransactionLogsForAccount = async (
  accountId: StringHex
): Promise<TransactionLogs> => {
  try {
    const transactionLogs = await fullServiceApi.getAllTransactionLogsForAccount({ accountId });

    transactionLogs.transactionLogIds.forEach((v: StringHex) => {
      const w = transactionLogs.transactionLogMap[v];
      w.changeTxoIds = w.changeTxos.map((x: TransactionAbbreviation) => x.txoIdHex);
      w.inputTxoIds = w.inputTxos.map((x: TransactionAbbreviation) => x.txoIdHex);
      w.outputTxoIds = w.outputTxos.map((x: TransactionAbbreviation) => x.txoIdHex);

      w.recipientAddressId = w.outputTxos.length > 0 ? w.outputTxos[0].recipientAddressId : null;
    });

    return transactionLogs;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type FetchAllTransactionLogsForAccountService = typeof fetchAllTransactionLogsForAccount;
