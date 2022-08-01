import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog, TransactionLogFromFullServiceV2 } from '../../types/TransactionLog.d';
import type { TxProposal } from '../../types/TxProposal.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertV2TransactionLogToWalletTransactionLog } from './convertV2TransactionLogToWalletTransactionLog';

const SUBMIT_TRANSACTION_METHOD = 'submit_transaction';

type SubmitTransactionParams = {
  accountId?: StringHex;
  txProposal: TxProposal;
};

type SubmitTransactionResult = {
  transaction: TransactionLog;
};

const submitTransaction = async ({
  accountId,
  txProposal,
}: SubmitTransactionParams): Promise<SubmitTransactionResult> => {
  const {
    result,
    error,
  }: AxiosFullServiceResponse<{ transaction: TransactionLogFromFullServiceV2 }> =
    await axiosFullService(SUBMIT_TRANSACTION_METHOD, {
      accountId,
      txProposal,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return { transaction: convertV2TransactionLogToWalletTransactionLog(result.transaction) };
  }
};

export default submitTransaction;
