import * as fullServiceApi from '../fullService/api';
import type {
  BuildTransactionParams,
  BuildTransactionResult,
} from '../fullService/api/buildTransaction';

// TODO, better error handling
export const buildTransaction = async (
  buildTransactionParams: BuildTransactionParams
): Promise<BuildTransactionResult> => fullServiceApi.buildTransaction(buildTransactionParams);

export type BuildTransactionService = typeof buildTransaction;
