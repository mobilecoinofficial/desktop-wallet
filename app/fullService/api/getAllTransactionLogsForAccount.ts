import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLogs } from '../../types/TransactionLog.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD = 'get_all_transaction_logs_for_account';

type GetAllTransactionLogsForAccountParams = {
  accountId: StringHex;
};

type GetAllTransactionLogsForAccountResult = TransactionLogs;

// TODO - change name throughout apps
export const getAllTransactionLogsForAccount = async ({
  accountId,
}: GetAllTransactionLogsForAccountParams): Promise<GetAllTransactionLogsForAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAllTransactionLogsForAccountResult> =
    await axiosFullService(GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD, {
      accountId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
