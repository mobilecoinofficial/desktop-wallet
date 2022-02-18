import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog } from '../../types/TransactionLog.d';
import type { TxProposal } from '../../types/TxProposal.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

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
  const { result, error }: AxiosFullServiceResponse<SubmitTransactionResult> =
    await axiosFullService(SUBMIT_TRANSACTION_METHOD, {
      accountId,
      txProposal,
    });
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as SubmitTransactionResult;
  }
};

export default submitTransaction;
