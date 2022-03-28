import type { GiftCode } from '../../types/GiftCode.d';
import type { StringHex, StringB58 } from '../../types/SpecialStrings.d';
import type { TxProposal } from '../../types/TxProposal.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const SUBMIT_GIFT_CODE_METHOD = 'submit_gift_code';

export type SubmitGiftCodeParams = {
  fromAccountId: StringHex;
  giftCodeB58: StringB58;
  txProposal: TxProposal;
};

export type SubmitGiftCodeResult = {
  giftCode: GiftCode;
};

export const submitGiftCode = async ({
  fromAccountId,
  giftCodeB58,
  txProposal,
}: SubmitGiftCodeParams): Promise<SubmitGiftCodeResult> => {
  const { result, error }: AxiosFullServiceResponse<SubmitGiftCodeResult> = await axiosFullService(
    SUBMIT_GIFT_CODE_METHOD,
    {
      fromAccountId,
      giftCodeB58,
      txProposal,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return { giftCode: result.giftCode };
  }
};
