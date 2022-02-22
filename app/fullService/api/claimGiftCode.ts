import type { StringB58, StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const CLAIM_GIFT_CODE_METHOD = 'claim_gift_code';

export type ClaimGiftCodeParams = {
  accountId: StringHex;
  address?: StringB58;
  giftCodeB58: StringB58;
};

export type ClaimGiftCodeResult = {
  giftCodeStatus: string;
};

const claimGiftCode = async ({
  accountId,
  address,
  giftCodeB58,
}: ClaimGiftCodeParams): Promise<ClaimGiftCodeResult> => {
  const { result, error }: AxiosFullServiceResponse<ClaimGiftCodeResult> = await axiosFullService(
    CLAIM_GIFT_CODE_METHOD,
    {
      accountId,
      address,
      giftCodeB58,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

export default claimGiftCode;
