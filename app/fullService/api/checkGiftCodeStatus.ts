import type { StringB58 } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

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
  const { result, error }: AxiosFullServiceResponse<CheckGiftCodeStatusResult> =
    await axiosFullService(
      CHECK_GIFT_CODE_STATUS_METHOD,
      {
        giftCodeB58,
      },
      'v1'
    );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

export default checkGiftCodeStatus;
