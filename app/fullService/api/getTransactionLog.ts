import type { StringHex } from '../../types/SpecialStrings';
import type TransactionLog from '../../types/TransactionLog';
import axiosFullService from '../axiosFullService';

const GET_TRANSACTION_LOG_METHOD = 'get_transaction_LOG';

type GetTransactionLogParams = {
  transactionLogId: StringHex;
};

type GetTransactionLogResult = {
  transactionLog: TransactionLog;
};

const getTransactionLog = async ({
  transactionLogId,
}: GetTransactionLogParams): Promise<GetTransactionLogResult> => {
  const { result, error } = await axiosFullService(GET_TRANSACTION_LOG_METHOD, {
    transactionLogId,
  });
  debugger;
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getTransactionLog;
