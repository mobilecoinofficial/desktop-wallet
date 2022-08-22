import type { GiftCode } from '../../types/GiftCode.d';
import type { StringB58 } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_GIFT_CODE_METHOD = 'get_gift_code';

type GetGiftCodeParams = {
  giftCodeB58: StringB58;
};

type GetGiftCodeResult = {
  giftCode: GiftCode;
};

const getGiftCode = async ({ giftCodeB58 }: GetGiftCodeParams): Promise<GetGiftCodeResult> => {
  const { result, error }: AxiosFullServiceResponse<GetGiftCodeResult> = await axiosFullService(
    GET_GIFT_CODE_METHOD,
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

export default getGiftCode;
