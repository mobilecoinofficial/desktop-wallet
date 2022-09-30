import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLogs, TransactionLogsFromV2 } from '../../types/TransactionLog.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAllAddressesForAccount from './getAllAddressesForAccount';
import { getTxosV2 } from './getAllTxosForAccount';
import {
  convertTransactionLogsResponseFromV2,
  convertTxosToTransactionLogs,
} from './transactionLogVersionConversion';

const GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD = 'get_transaction_logs';

type GetAllTransactionLogsForAccountParams = {
  accountId: StringHex;
};

type GetAllTransactionLogsForAccountResult = TransactionLogs;

// TODO - change name throughout apps
const getAllTransactionLogsForAccount = async ({
  accountId,
}: GetAllTransactionLogsForAccountParams): Promise<GetAllTransactionLogsForAccountResult> => {
  const addresses = await getAllAddressesForAccount({ accountId });
  const { result, error }: AxiosFullServiceResponse<TransactionLogsFromV2> = await axiosFullService(
    GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_METHOD,
    {
      accountId,
      limit: 10000,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }
  const txos = await getTxosV2({ accountId });
  // fetching txos and converting them to transaction logs for the tx history
  // might be better to refactor and create a history item derrivable from either
  const convertedTxos: TransactionLogs = convertTxosToTransactionLogs(txos, accountId, addresses);
  const logs = convertTransactionLogsResponseFromV2(result);

  return {
    transactionLogIds: [...logs.transactionLogIds, ...convertedTxos.transactionLogIds],
    transactionLogMap: {
      ...logs.transactionLogMap,
      ...convertedTxos.transactionLogMap,
    },
  };
};

export default getAllTransactionLogsForAccount;
