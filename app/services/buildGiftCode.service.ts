import * as fullServiceApi from '../fullService/api';
import type { BuildGiftCodeParams, BuildGiftCodeResult } from '../fullService/api/buildGiftCode';

const buildGiftCode = async (
  buildGiftCodeParams: BuildGiftCodeParams
): Promise<BuildGiftCodeResult> => fullServiceApi.buildGiftCode(buildGiftCodeParams);

export default buildGiftCode;
export { buildGiftCode };
