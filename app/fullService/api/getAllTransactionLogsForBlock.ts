import type { StringUInt64 } from '../../types/SpecialStrings.d';
import type { TransactionLogs, TransactionLogsFromV2 } from '../../types/TransactionLog.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertTransactionLogsResponseFromV2 } from './convertV2TransactionLogToWalletTransactionLog';

const GET_ALL_TRANSACTION_LOGS_FOR_BLOCK_METHOD = 'get_transaction_logs';

type GetAllTransactionLogsForAccountParams = {
  blockIndex: StringUInt64;
};

type GetAllTransactionLogsForAccountResult = TransactionLogs;

// TODO - change name throughout apps
const getAllTransactionLogsForAccount = async ({
  blockIndex,
}: GetAllTransactionLogsForAccountParams): Promise<GetAllTransactionLogsForAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<TransactionLogsFromV2> = await axiosFullService(
    GET_ALL_TRANSACTION_LOGS_FOR_BLOCK_METHOD,
    {
      maxBlockIndex: blockIndex,
      minBlockIndex: blockIndex,
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
