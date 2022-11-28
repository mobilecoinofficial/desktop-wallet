import type { StringHex } from '../../types/SpecialStrings.d';
import type { TransactionLog, TransactionLogV2 } from '../../types/TransactionLog.d';
import type { TxProposal } from '../../types/TxProposal.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertTransactionLogFromV2 } from './transactionLogVersionConversion';

const SUBMIT_TRANSACTION_METHOD = 'submit_transaction';

type SubmitTransactionParams = {
  accountId?: StringHex;
  txProposal: TxProposal;
  blockVersion?: string;
};

type SubmitTransactionResult = {
  transactionLog: TransactionLog;
};

const submitTransaction = async ({
  accountId,
  txProposal,
  blockVersion,
}: SubmitTransactionParams): Promise<SubmitTransactionResult | undefined> => {
  const { result, error }: AxiosFullServiceResponse<{ transactionLog: TransactionLogV2 }> =
    await axiosFullService(SUBMIT_TRANSACTION_METHOD, {
      // accountId,
      blockVersion,
      txProposal,
    });

  if (error) {
    throw new Error(error);
    // submitting a tx created in offline mode will not return a transaction log
  } else if (result?.transactionLog) {
    return { transactionLog: convertTransactionLogFromV2(result.transactionLog) };
  } else {
    return undefined;
  }
};

export default submitTransaction;
