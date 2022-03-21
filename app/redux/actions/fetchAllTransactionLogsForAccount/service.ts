import { isString } from 'formik';

import * as fullServiceApi from '../../../fullService/api';
import { StringHex, TransactionAbbreviation, TransactionLogs } from '../../../types';
import { store } from '../../store';
import {
  fetchAllTransactionLogsForAccountFailureAction,
  fetchAllTransactionLogsForAccountStartedAction,
  fetchAllTransactionLogsForAccountSuccessAction,
} from './action';

export const fetchAllTransactionLogsForAccount = async (
  accountId: StringHex
): Promise<TransactionLogs | undefined> => {
  store.dispatch(fetchAllTransactionLogsForAccountStartedAction());

  try {
    const transactionLogs = await fullServiceApi.getAllTransactionLogsForAccount({ accountId });
    console.log('TRANSACTION LOGS FROM FULL SERVICE API', transactionLogs);

    transactionLogs.transactionLogIds.forEach((v: StringHex) => {
      const w = transactionLogs.transactionLogMap[v];
      w.changeTxoIds = w.changeTxos.map((x: TransactionAbbreviation) => x.txoIdHex);
      w.inputTxoIds = w.inputTxos.map((x: TransactionAbbreviation) => x.txoIdHex);
      w.outputTxoIds = w.outputTxos.map((x: TransactionAbbreviation) => x.txoIdHex);

      w.recipientAddressId = w.outputTxos.length > 0 ? w.outputTxos[0].recipientAddressId : null;
    });
    store.dispatch(fetchAllTransactionLogsForAccountSuccessAction(transactionLogs));
    return transactionLogs;
  } catch (err) {
    let error;
    if (err instanceof Error) {
      error = err.message;
    } else if (isString(err)) {
      error = err;
    } else {
      throw err;
    }
    store.dispatch(fetchAllTransactionLogsForAccountFailureAction(Error(error)));
    return undefined;
  }
};

export type FetchAllTransactionLogsForAccountService = typeof fetchAllTransactionLogsForAccount;
