import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog } from '../../types/TransactionLog.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const GET_TRANSACTION_LOG_METHOD = 'get_transaction_LOG';

type GetTransactionLogParams = {
  transactionLogId: StringHex;
};

type GetTransactionLogResult = {
  transactionLog: TransactionLog;
};

export const getTransactionLog = async ({
  transactionLogId,
}: GetTransactionLogParams): Promise<GetTransactionLogResult> => {
  const { result, error }: AxiosFullServiceResponse<GetTransactionLogResult> =
    await axiosFullService(GET_TRANSACTION_LOG_METHOD, {
      transactionLogId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
