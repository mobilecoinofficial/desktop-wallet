import { TransactionLogs } from '../../../types';

export const FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED =
  'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED';
export const FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS =
  'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS';
export const FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE =
  'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE';

export type FetchAllTransactionLogsForAccountStartedAction = {
  type: 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED';
};

export type FetchAllTransactionLogsForAccountSuccessAction = {
  payload: {
    transactionLogs: TransactionLogs;
  };
  type: 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS';
};

export type FetchAllTransactionLogsForAccountFailureAction = {
  payload: {
    error: Error;
  };
  type: 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE';
};
