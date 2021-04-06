import type GiftCode from '../../types/GiftCode';
import type { StringHex, StringB58 } from '../../types/SpecialStrings';
import type TxProposal from '../../types/TxProposal';
import axiosFullService from '../axiosFullService';

const SUBMIT_GIFT_CODE_METHOD = 'submit_gift_code';

export type SubmitGiftCodeParams = {
  fromAccountId: StringHex;
  giftCodeB58: StringB58;
  txProposal: TxProposal;
};

export type SubmitGiftCodeResult = {
  giftCode: GiftCode;
};

type AxiosFullServiceResponse = {
  error: any;
  result: {
    giftCode: GiftCode;
  };
};

const submitGiftCode = async ({
  fromAccountId,
  giftCodeB58,
  txProposal,
}: SubmitGiftCodeParams): Promise<SubmitGiftCodeResult> => {
  const { result, error }: AxiosFullServiceResponse = await axiosFullService(
    SUBMIT_GIFT_CODE_METHOD,
    {
      fromAccountId,
      giftCodeB58,
      txProposal,
    }
  );

  const { giftCode } = result;

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return {
      giftCode,
    };
  }
};

export default submitGiftCode;
