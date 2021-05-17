import type { GiftCode } from '../../types/GiftCode.d';

export const UPDATE_GIFT_CODES = 'UPDATE_GIFT_CODES';

export type UpdateGiftCodesActionType = {
  type: 'UPDATE_GIFT_CODES';
  payload: {
    giftCodes: GiftCode[];
  };
};

export const updateGiftCodesAction = (giftCodes: GiftCode[]): UpdateGiftCodesActionType => ({
  payload: { giftCodes },
  type: UPDATE_GIFT_CODES,
});
