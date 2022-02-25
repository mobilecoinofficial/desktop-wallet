import { Confirmations } from '../../types/Confirmation';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService from '../axiosFullService';

const GET_CONFIRMATIONS_METHOD = 'get_confirmations';

type GetConfirmationsParams = {
  transactionLogId: StringHex;
};

type GetConfirmationsResult = {
  confirmations: Confirmations; // TODO - lock in name of object
};

const getConfirmations = async ({
  transactionLogId,
}: GetConfirmationsParams): Promise<GetConfirmationsResult> => {
  const { result, error } = await axiosFullService(GET_CONFIRMATIONS_METHOD, {
    transactionLogId,
  });
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getConfirmations;
