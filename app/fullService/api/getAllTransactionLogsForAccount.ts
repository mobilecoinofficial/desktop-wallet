import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLogs, TransactionLogsFromV2 } from '../../types/TransactionLog.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertTransactionLogsResponseFromV2 } from './convertV2TransactionLogToWalletTransactionLog';

const GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD = 'get_transaction_logs';

type GetAllTransactionLogsForAccountParams = {
  accountId: StringHex;
};

type GetAllTransactionLogsForAccountResult = TransactionLogs;

// TODO - change name throughout apps
const getAllTransactionLogsForAccount = async ({
  accountId,
}: GetAllTransactionLogsForAccountParams): Promise<GetAllTransactionLogsForAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<TransactionLogsFromV2> = await axiosFullService(
    GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD,
    {
      accountId,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return convertTransactionLogsResponseFromV2(result);
  }
};

export default getAllTransactionLogsForAccount;
