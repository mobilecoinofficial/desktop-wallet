import * as fullServiceApi from '../fullService/api';
import type { BuildTransactionParams } from '../fullService/api/buildTransaction';
import type { TxProposal } from '../types/TxProposal.d';

// TODO, better error handling
const buildTransaction = async (
  buildTransactionParams: BuildTransactionParams
): Promise<TxProposal> => fullServiceApi.buildTransaction(buildTransactionParams);

export default buildTransaction;
export { buildTransaction };
export type BuildTransactionService = typeof buildTransaction;
