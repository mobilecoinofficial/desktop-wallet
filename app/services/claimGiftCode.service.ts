import * as fullServiceApi from '../fullService/api';
import type { ClaimGiftCodeParams, ClaimGiftCodeResult } from '../fullService/api/claimGiftCode';

const claimGiftCode = async (
  claimGiftCodeParams: ClaimGiftCodeParams
): Promise<ClaimGiftCodeResult> => fullServiceApi.claimGiftCode(claimGiftCodeParams);

export default claimGiftCode;
export { claimGiftCode };
export type ClaimGiftCodeService = typeof claimGiftCode;
