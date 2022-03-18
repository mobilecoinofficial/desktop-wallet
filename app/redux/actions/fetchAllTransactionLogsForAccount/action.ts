import { TransactionLogs } from '../../../types';
import {
  FetchAllTransactionLogsForAccountFailureAction,
  FetchAllTransactionLogsForAccountStartedAction,
  FetchAllTransactionLogsForAccountSuccessAction,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS,
} from './type';

export const fetchAllTransactionLogsForAccountStartedAction =
  (): FetchAllTransactionLogsForAccountStartedAction => ({
    type: FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED,
  });

export const fetchAllTransactionLogsForAccountSuccessAction = (
  transactionLogs: TransactionLogs
): FetchAllTransactionLogsForAccountSuccessAction => ({
  payload: {
    transactionLogs,
  },
  type: FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS,
});

export const fetchAllTransactionLogsForAccountFailureAction = (
  error: Error
): FetchAllTransactionLogsForAccountFailureAction => ({
  payload: {
    error,
  },
  type: FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE,
});
