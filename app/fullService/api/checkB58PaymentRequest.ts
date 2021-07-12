import type { StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import axiosFullService from '../axiosFullService';

const CHECK_B58_TYPE_METHOD = 'check_b58_type';

export type CheckB58PaymentRequestParams = {
  b58Code: StringB58;
};

export type CheckB58PaymentRequestResult = {
  type: string;
  data: {
    b58Code: StringB58;
    valuePmob: StringUInt64;
  };
};

const checkB58PaymentRequest = async (
  b58Code: CheckB58PaymentRequestParams
): Promise<CheckB58PaymentRequestResult> => {
  const res = await axiosFullService(CHECK_B58_TYPE_METHOD, { b58Code });
  console.log(res);

  if (res.error) {
    return res.error;
  }
  if (res.result.b58Type !== 'PaymentRequest') {
    return { error: 'Invalid payment request code.' };
  }
  return res.result.data;
};

export default checkB58PaymentRequest;
