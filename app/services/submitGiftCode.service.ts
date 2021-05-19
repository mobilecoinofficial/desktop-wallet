import * as fullServiceApi from '../fullService/api';
import type { SubmitGiftCodeParams, SubmitGiftCodeResult } from '../fullService/api/submitGiftCode';

/*
submitGiftCode: (
    submitGiftCodeParams: SubmitGiftCodeParams
  ) => Promise<SubmitGiftCodeResult | void>;
*/

const submitGiftCode = async (
  submitGiftCodeParams: SubmitGiftCodeParams
): Promise<SubmitGiftCodeResult> => fullServiceApi.submitGiftCode(submitGiftCodeParams);

export default submitGiftCode;
export { submitGiftCode };
