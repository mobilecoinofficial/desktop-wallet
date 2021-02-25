import type { StringHex } from '../../types/SpecialStrings';
import type TransactionLog from '../../types/TransactionLog';
import axiosFullService from '../axiosFullService';

const GET_ALL_TRANSACTIONS_BY_ACCOUNT_METHOD = 'get_all_transactions_by_account';

type GetAllTransactionsByAccountParams = {
  accountId: StringHex;
};

type GetAllTransactionsByAccountResult = {
  transactionLogIds: StringHex[];
  transactionLogMap: { [transactionsLogId: string]: TransactionLog };
};

const getAllTransactionsByAccount = async ({
  accountId,
}: GetAllTransactionsByAccountParams): Promise<GetAllTransactionsByAccountResult> => {
  const { result, error } = await axiosFullService(
    GET_ALL_TRANSACTIONS_BY_ACCOUNT_METHOD,
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

export default getAllTransactionsByAccount;
