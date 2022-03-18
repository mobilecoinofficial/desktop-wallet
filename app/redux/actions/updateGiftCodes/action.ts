import { GiftCode } from '../../../types';
import { UpdateGiftCodesAction, UPDATE_GIFT_CODES } from './type';

export const updateGiftCodesAction = (giftCodes: GiftCode[]): UpdateGiftCodesAction => ({
  payload: { giftCodes },
  type: UPDATE_GIFT_CODES,
});
