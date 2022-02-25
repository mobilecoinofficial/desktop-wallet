import type { GiftCode } from '../../types/GiftCode.d';
import axiosFullService from '../axiosFullService';

const GET_ALL_GIFT_CODES_METHOD = 'get_all_gift_codes';

type GetAllGiftCodesResult = {
  giftCodes: GiftCode[];
};

const getAllGiftCodes = async (): Promise<GetAllGiftCodesResult> => {
  const { result, error } = await axiosFullService(GET_ALL_GIFT_CODES_METHOD);
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAllGiftCodes;
