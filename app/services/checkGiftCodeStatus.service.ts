import * as fullServiceApi from '../fullService/api';
import type {
  CheckGiftCodeStatusParams,
  CheckGiftCodeStatusResult,
} from '../fullService/api/checkGiftCodeStatus';

const checkGiftCodeStatus = async (
  checkGiftCodeStatusParams: CheckGiftCodeStatusParams
): Promise<CheckGiftCodeStatusResult> =>
  fullServiceApi.checkGiftCodeStatus(checkGiftCodeStatusParams);

export default checkGiftCodeStatus;
export { checkGiftCodeStatus };
