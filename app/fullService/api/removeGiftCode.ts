import type GiftCode from '../../types/GiftCode';
import type { StringB58 } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const REMOVE_GIFT_CODE_METHOD = 'remove_gift_code';

type RemoveGiftCodeParams = {
  giftCodeB58: StringB58;
};

type RemoveGiftCodeResult = {
  giftCode: GiftCode;
};

const removeGiftCode = async ({
  giftCodeB58,
}: RemoveGiftCodeParams): Promise<RemoveGiftCodeResult> => {
  const { result, error } = await axiosFullService(REMOVE_GIFT_CODE_METHOD, {
    giftCodeB58,
  });
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default removeGiftCode;
