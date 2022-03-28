import * as fullServiceApi from '../../fullService/api';
import { StringHex, TransactionAbbreviation, TransactionLogs } from '../../types';
import { getAllTransactionLogsForAccountAction } from '../actions';
import { store } from '../store';

export const getAllTransactionLogsForAccount = async (
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
    store.dispatch(getAllTransactionLogsForAccountAction(transactionLogs));
    return transactionLogs;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};
