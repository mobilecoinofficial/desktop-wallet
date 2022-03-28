import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog } from '../../types/TransactionLog.d';
import type { TxProposal } from '../../types/TxProposal.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const SUBMIT_TRANSACTION_METHOD = 'submit_transaction';

type SubmitTransactionParams = {
  accountId?: StringHex;
  txProposal: TxProposal;
};

type SubmitTransactionResult = {
  transaction: TransactionLog;
};

export const submitTransaction = async ({
  accountId,
  txProposal,
}: SubmitTransactionParams): Promise<SubmitTransactionResult> => {
  const { result, error }: AxiosFullServiceResponse<SubmitTransactionResult> =
    await axiosFullService(SUBMIT_TRANSACTION_METHOD, {
      accountId,
      txProposal,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
