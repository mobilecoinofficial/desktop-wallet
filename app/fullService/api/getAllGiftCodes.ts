import type { GiftCode } from '../../types/GiftCode.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ALL_GIFT_CODES_METHOD = 'get_all_gift_codes';

type GetAllGiftCodesResult = {
  giftCodes: GiftCode[];
};

const getAllGiftCodes = async (): Promise<GetAllGiftCodesResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAllGiftCodesResult> = await axiosFullService(
    GET_ALL_GIFT_CODES_METHOD,
    {},
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

export default getAllGiftCodes;
