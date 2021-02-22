import type { StringHex } from '../../types/SpecialStrings';
import type Transaction from '../../types/TransactionLog';
import axiosFullService from '../axiosFullService';

const GET_TRANSACTION_METHOD = 'get_transaction';

type GetTransactionParams = {
  transactionLogId: StringHex;
};

type GetTransactionResult = {
  transaction: Transaction;
};

const getTransaction = async ({
  transactionLogId,
}: GetTransactionParams): Promise<GetTransactionResult> => {
  const { result, error } = await axiosFullService(GET_TRANSACTION_METHOD, {
    transaction_log_id: transactionLogId,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getTransaction;
