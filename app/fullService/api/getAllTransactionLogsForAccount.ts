import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLogs } from '../../types/TransactionLog.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD = 'get_all_transaction_logs_for_account';

type GetAllTransactionLogsForAccountParams = {
  accountId: StringHex;
};

type GetAllTransactionLogsForAccountResult = TransactionLogs;

// TODO - change name throughout apps
const getAllTransactionLogsForAccount = async ({
  accountId,
}: GetAllTransactionLogsForAccountParams): Promise<GetAllTransactionLogsForAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAllTransactionLogsForAccountResult> =
    await axiosFullService(GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD, {
      accountId,
    });
  if (error) {
    // TODO - I'll write up a better error handler.
    throw new Error(error);
  } else {
    return result as GetAllTransactionLogsForAccountResult;
  }
};

export default getAllTransactionLogsForAccount;
