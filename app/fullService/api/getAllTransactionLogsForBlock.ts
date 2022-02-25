import type { StringUInt64 } from '../../types/SpecialStrings.d';
import type { TransactionLogs } from '../../types/TransactionLog.d';
import axiosFullService from '../axiosFullService';

const GET_ALL_TRANSACTION_LOGS_FOR_BLOCK_METHOD = 'get_all_transaction_logs_for_block';

type GetAllTransactionLogsForAccountParams = {
  blockIndex: StringUInt64;
};

type GetAllTransactionLogsForAccountResult = TransactionLogs;

// TODO - change name throughout apps
const getAllTransactionLogsForAccount = async ({
  blockIndex,
}: GetAllTransactionLogsForAccountParams): Promise<GetAllTransactionLogsForAccountResult> => {
  const { result, error } = await axiosFullService(GET_ALL_TRANSACTION_LOGS_FOR_BLOCK_METHOD, {
    blockIndex,
  });
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAllTransactionLogsForAccount;
