import type { GiftCode } from '../../types/GiftCode.d';
import type { StringB58 } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const REMOVE_GIFT_CODE_METHOD = 'remove_gift_code';

export type RemoveGiftCodeParams = {
  giftCodeB58: StringB58;
};

export type RemoveGiftCodeResult = {
  giftCode: GiftCode;
};

const removeGiftCode = async ({
  giftCodeB58,
}: RemoveGiftCodeParams): Promise<RemoveGiftCodeResult> => {
  const { result, error }: AxiosFullServiceResponse<RemoveGiftCodeResult> = await axiosFullService(
    REMOVE_GIFT_CODE_METHOD,
    {
      giftCodeB58,
    }
  );
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as RemoveGiftCodeResult;
  }
};

export default removeGiftCode;
