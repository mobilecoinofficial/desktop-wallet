import * as fullServiceApi from '../fullService/api';
import type { TxProposal } from '../types/TxProposal.d';

const submitTransaction = async (
  txProposal: TxProposal,
  accountId?: string,
  blockVersion?: string
): Promise<void> => {
  await fullServiceApi.submitTransaction({
    accountId,
    blockVersion,
    txProposal,
  });
};

export default submitTransaction;
export { submitTransaction };
export type SubmitTransactionService = typeof submitTransaction;
