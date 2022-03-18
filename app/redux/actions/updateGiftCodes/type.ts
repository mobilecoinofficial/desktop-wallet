import { GiftCode } from '../../../types';

export const UPDATE_GIFT_CODES = 'UPDATE_GIFT_CODES';

export type UpdateGiftCodesAction = {
  type: 'UPDATE_GIFT_CODES';
  payload: {
    giftCodes: GiftCode[];
  };
};
