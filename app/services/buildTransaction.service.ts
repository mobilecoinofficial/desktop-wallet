import * as fullServiceApi from '../fullService/api';
import type {
  BuildTransactionParams,
  BuildTransactionResult,
} from '../fullService/api/buildTransaction';

// TODO, better error handling
const buildTransaction = async (
  buildTransactionParams: BuildTransactionParams
): Promise<BuildTransactionResult> => fullServiceApi.buildTransaction(buildTransactionParams);

export default buildTransaction;
export { buildTransaction };
export type BuildTransactionService = typeof buildTransaction;
