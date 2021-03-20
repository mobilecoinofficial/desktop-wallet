import type { StringB58, StringHex } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const CLAIM_GIFT_CODE_METHOD = 'claim_gift_cde';

type ClaimGiftCodeParams = {
  accountId: StringHex;
  address?: StringB58;
  giftCodeB58: StringB58;
};

type ClaimGiftCodeResult = {
  giftCodeStatus: string;
};

const claimGiftCode = async ({
  accountId,
  address,
  giftCodeB58,
}: ClaimGiftCodeParams): Promise<ClaimGiftCodeResult> => {
  const { result, error } = await axiosFullService(CLAIM_GIFT_CODE_METHOD, {
    accountId,
    address,
    giftCodeB58,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default claimGiftCode;
