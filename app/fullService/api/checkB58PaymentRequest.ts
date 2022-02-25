import type { StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const CHECK_B58_TYPE_METHOD = 'check_b58_type';

export type CheckB58PaymentRequestParams = {
  b58Code: StringB58;
};

export type CheckB58PaymentRequestResponse = {
  error?: string;
  publicAddressB58?: StringB58;
  value?: StringUInt64;
};

export type CheckB58PaymentRequestResult = {
  b58Type: string;
  data: CheckB58PaymentRequestData;
};

type CheckB58PaymentRequestData = {
  value: StringUInt64;
  publicAddressB58: StringB58;
  memo: string;
};

const checkB58PaymentRequest = async (
  b58Code: CheckB58PaymentRequestParams
): Promise<CheckB58PaymentRequestResponse> => {
  const { result, error }: AxiosFullServiceResponse<CheckB58PaymentRequestResult> =
    await axiosFullService(CHECK_B58_TYPE_METHOD, { b58Code });

  const checkResponse: CheckB58PaymentRequestResponse = {};

  if (error || result?.b58Type !== 'PaymentRequest') {
    checkResponse.error = 'Invalid payment request code.';
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  const validatedResult = result as CheckB58PaymentRequestResult;

  checkResponse.publicAddressB58 = validatedResult.data.publicAddressB58;
  checkResponse.value = validatedResult.data.value;

  return checkResponse;
};

export default checkB58PaymentRequest;
