import * as fullServiceApi from '../fullService/api';
import type { SubmitGiftCodeParams, SubmitGiftCodeResult } from '../fullService/api/submitGiftCode';

export const submitGiftCode = async (
  submitGiftCodeParams: SubmitGiftCodeParams
): Promise<SubmitGiftCodeResult> => fullServiceApi.submitGiftCode(submitGiftCodeParams);

export type SubmitGiftCodeService = typeof submitGiftCode;
