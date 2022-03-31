import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const VALIDATE_CONFIRMATION_METHOD = 'validate_confirmation';

type ValidateConfirmationParams = {
  accountId: StringHex;
  txoId: StringHex;
  confirmation: StringHex;
};

type ValidateConfirmationResult = {
  validated: boolean; // TODO - lock in name of object
};

const validateConfirmation = async ({
  accountId,
  confirmation,
  txoId,
}: ValidateConfirmationParams): Promise<ValidateConfirmationResult> => {
  const { result, error }: AxiosFullServiceResponse<ValidateConfirmationResult> =
    await axiosFullService(VALIDATE_CONFIRMATION_METHOD, {
      accountId,
      confirmation,
      txoId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

export default validateConfirmation;
