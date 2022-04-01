import { GiftCode } from '../../types';

export const GET_ALL_GIFT_CODES = 'GET_ALL_GIFT_CODES';

export type GetAllGiftCodesAction = {
  type: 'GET_ALL_GIFT_CODES';
  payload: {
    giftCodes: GiftCode[];
  };
};

export const getAllGiftCodesAction = (giftCodes: GiftCode[]): GetAllGiftCodesAction => ({
  payload: { giftCodes },
  type: GET_ALL_GIFT_CODES,
});
