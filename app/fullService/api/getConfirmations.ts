import { Confirmations } from '../../types/Confirmation';
import type { StringHex } from '../../types/SpecialStrings.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const GET_CONFIRMATIONS_METHOD = 'get_confirmations';

type GetConfirmationsParams = {
  transactionLogId: StringHex;
};

type GetConfirmationsResult = {
  confirmations: Confirmations; // TODO - lock in name of object
};

export const getConfirmations = async ({
  transactionLogId,
}: GetConfirmationsParams): Promise<GetConfirmationsResult> => {
  const { result, error }: AxiosFullServiceResponse<GetConfirmationsResult> =
    await axiosFullService(GET_CONFIRMATIONS_METHOD, {
      transactionLogId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
