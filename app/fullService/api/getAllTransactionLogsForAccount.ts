import type { StringHex } from '../../types/SpecialStrings';
import type TransactionLog from '../../types/TransactionLog';
import axiosFullService from '../axiosFullService';

const GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD = 'get_all_transaction_logs_for_account';

type GetAllTransactionLogsForAccountParams = {
  accountId: StringHex;
};

type GetAllTransactionLogsForAccountResult = {
  transactionLogIds: StringHex[];
  transactionLogMap: { [transactionsLogId: string]: TransactionLog };
};

// TODO - change name throughout apps
const getAllTransactionLogsForAccount = async ({
  accountId,
}: GetAllTransactionLogsForAccountParams): Promise<GetAllTransactionLogsForAccountResult> => {
  const { result, error } = await axiosFullService(
    GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD,
    {
      accountId,
    },
  );
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAllTransactionLogsForAccount;
