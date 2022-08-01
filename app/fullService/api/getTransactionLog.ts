import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog, TransactionLogFromFullServiceV2 } from '../../types/TransactionLog.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertV2TransactionLogToWalletTransactionLog } from './convertV2TransactionLogToWalletTransactionLog';

const GET_TRANSACTION_LOG_METHOD = 'get_transaction_LOG';

type GetTransactionLogParams = {
  transactionLogId: StringHex;
};

type GetTransactionLogResult = {
  transactionLog: TransactionLogFromFullServiceV2;
};

const getTransactionLog = async ({
  transactionLogId,
}: GetTransactionLogParams): Promise<{ transactionLog: TransactionLog }> => {
  const { result, error }: AxiosFullServiceResponse<GetTransactionLogResult> =
    await axiosFullService(GET_TRANSACTION_LOG_METHOD, {
      transactionLogId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return { transactionLog: convertV2TransactionLogToWalletTransactionLog(result.transactionLog) };
  }
};

export default getTransactionLog;
