import { TransactionLogs } from '../../types';

export const GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT = 'GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT';

export type GetAllTransactionLogsForAccountAction = {
  payload: {
    transactionLogs: TransactionLogs;
  };
  type: 'GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT';
};

export const getAllTransactionLogsForAccountAction = (
  transactionLogs: TransactionLogs
): GetAllTransactionLogsForAccountAction => ({
  payload: {
    transactionLogs,
  },
  type: GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT,
});
