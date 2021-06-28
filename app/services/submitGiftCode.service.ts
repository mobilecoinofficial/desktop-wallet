import * as fullServiceApi from '../fullService/api';
import type { SubmitGiftCodeParams, SubmitGiftCodeResult } from '../fullService/api/submitGiftCode';

const submitGiftCode = async (
  submitGiftCodeParams: SubmitGiftCodeParams
): Promise<SubmitGiftCodeResult> => fullServiceApi.submitGiftCode(submitGiftCodeParams);

export default submitGiftCode;
export { submitGiftCode };
export type SubmitGiftCodeService = typeof submitGiftCode;
