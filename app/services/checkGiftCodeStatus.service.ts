import * as fullServiceApi from '../fullService/api';
import type {
  CheckGiftCodeStatusParams,
  CheckGiftCodeStatusResult,
} from '../fullService/api/checkGiftCodeStatus';

export const checkGiftCodeStatus = async (
  checkGiftCodeStatusParams: CheckGiftCodeStatusParams
): Promise<CheckGiftCodeStatusResult> =>
  fullServiceApi.checkGiftCodeStatus(checkGiftCodeStatusParams);

export type CheckGiftCodeStatusService = typeof checkGiftCodeStatus;
