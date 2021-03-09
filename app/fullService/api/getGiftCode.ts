import type GiftCode from '../../types/GiftCode';
import type { StringB58 } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const GET_GIFT_CODE_METHOD = 'get_gift_code';

type GetGiftCodeParams = {
  giftCodeB58: StringB58;
};

type GetGiftCodeResult = {
  giftCode: GiftCode;
};

const getGiftCode = async ({ giftCodeB58 }: GetGiftCodeParams): Promise<GetGiftCodeResult> => {
  const { result, error } = await axiosFullService(GET_GIFT_CODE_METHOD, {
    giftCodeB58,
  });
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getGiftCode;
