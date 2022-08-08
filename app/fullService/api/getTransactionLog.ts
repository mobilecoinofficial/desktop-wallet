import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog, TransactionLogV2 } from '../../types/TransactionLog.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertTransactionLogFromV2 } from './transactionLogVersionConversion';

const GET_TRANSACTION_LOG_METHOD = 'get_transaction_LOG';

type GetTransactionLogParams = {
  transactionLogId: StringHex;
};

type GetTransactionLogResult = {
  transactionLog: TransactionLogV2;
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
    return { transactionLog: convertTransactionLogFromV2(result.transactionLog) };
  }
};

export default getTransactionLog;
