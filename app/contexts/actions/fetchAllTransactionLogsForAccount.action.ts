import type { TransactionLogs } from '../../types/TransactionLog.d';

export const FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT = 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT';

export type FetchAllTransactionLogsForAccountActionType = {
  payload: {
    transactionLogs: TransactionLogs;
  };
  type: 'FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT';
};

export const fetchAllTransactionLogsForAccountAction = (
  transactionLogs: TransactionLogs
): FetchAllTransactionLogsForAccountActionType => ({
  payload: {
    transactionLogs,
  },
  type: FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT,
});
