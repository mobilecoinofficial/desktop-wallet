import * as fullServiceApi from '../fullService/api';
import type { ClaimGiftCodeParams, ClaimGiftCodeResult } from '../fullService/api/claimGiftCode';

export const claimGiftCode = async (
  claimGiftCodeParams: ClaimGiftCodeParams
): Promise<ClaimGiftCodeResult> => fullServiceApi.claimGiftCode(claimGiftCodeParams);

export type ClaimGiftCodeService = typeof claimGiftCode;
