import * as fullServiceApi from '../../fullService/api';
import { StringHex, TransactionAbbreviation } from '../../types';
import { errorToString } from '../../utils/errorHandler';
import { getAllTransactionLogsForAccountAction } from '../actions';
import { store } from '../store';

export const getAllTransactionLogsForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const transactionLogs = await fullServiceApi.getAllTransactionLogsForAccount({ accountId });

    transactionLogs.transactionLogIds.forEach((v: StringHex) => {
      const w = transactionLogs.transactionLogMap[v];
      w.changeTxoIds = w.changeTxos.map((x: TransactionAbbreviation) => x.txoId);
      w.inputTxoIds = w.inputTxos.map((x: TransactionAbbreviation) => x.txoId);
      w.outputTxoIds = w.outputTxos.map((x: TransactionAbbreviation) => x.txoId);

      w.address = w.outputTxos[0].recipientAddressId || '';
    });
    store.dispatch(getAllTransactionLogsForAccountAction(transactionLogs));
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};
