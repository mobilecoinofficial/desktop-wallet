import type GiftCode from '../../types/GiftCode';
import type { StringB58 } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const CHECK_GIFT_CODE_STATUS_METHOD = 'check_gift_code_status';

type CheckGiftCodeStatusParams = {
  giftCodeB58: StringB58;
};

type CheckGiftCodeStatusResult = {
  giftCodeStatus: 'GiftCodeAvailable'; // TODO - add rest of status
  giftCode: GiftCode;
  feeConfirmation: bigint;
  totalValueConfirmation: bigint;
};

const checkGiftCodeStatus = async ({
  giftCodeB58,
}: CheckGiftCodeStatusParams): Promise<CheckGiftCodeStatusResult> => {
  const { result, error } = await axiosFullService(CHECK_GIFT_CODE_STATUS_METHOD, {
    giftCodeB58,
  });

  debugger;
  const { txProposal, giftCode } = result;

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default checkGiftCodeStatus;
