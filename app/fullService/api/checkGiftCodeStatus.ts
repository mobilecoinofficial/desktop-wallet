import type { StringB58 } from '../../types/SpecialStrings.d';
import axiosFullService from '../axiosFullService';

const CHECK_GIFT_CODE_STATUS_METHOD = 'check_gift_code_status';

export type CheckGiftCodeStatusParams = {
  giftCodeB58: StringB58;
};

export type CheckGiftCodeStatusResult = {
  giftCodeStatus: string; // TODO - add rest of status
  giftCodeValue: number;
};

const checkGiftCodeStatus = async ({
  giftCodeB58,
}: CheckGiftCodeStatusParams): Promise<CheckGiftCodeStatusResult> => {
  const { result, error } = await axiosFullService(CHECK_GIFT_CODE_STATUS_METHOD, {
    giftCodeB58,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default checkGiftCodeStatus;
