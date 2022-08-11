import type { StringB58, StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLogs, TransactionLogsFromV2 } from '../../types/TransactionLog.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
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

function getRecipientAddressFromTransactionLogs(logs: TransactionLogsFromV2): StringB58 {
  return logs.transactionLogMap[logs.transactionLogIds[0]].changeTxos[0].recipientPublicAddressB58;
}

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
  } else if (!result.transactionLogIds.length) {
    return {
      transactionLogIds: [],
      transactionLogMap: {},
    };
  } else {
    const address = getRecipientAddressFromTransactionLogs(result);
    const txos = await getTxosV2({ accountId });
    // fetching txos and converting them to transaction logs for the tx history
    // this could cause a problem as we treat txo is as transaction log ID
    // might be better to create a history item derrivable from either
    const convertedTxos: TransactionLogs = convertTxosToTransactionLogs(txos, accountId, address);
    const logs = convertTransactionLogsResponseFromV2(result);
    return {
      transactionLogIds: [...logs.transactionLogIds, ...convertedTxos.transactionLogIds],
      transactionLogMap: {
        ...logs.transactionLogMap,
        ...convertedTxos.transactionLogMap,
      },
    };
  }
};

export default getAllTransactionLogsForAccount;
