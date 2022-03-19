import * as fullServiceApi from '../fullService/api';
import type { BuildGiftCodeParams, BuildGiftCodeResult } from '../fullService/api/buildGiftCode';

export const buildGiftCode = async (
  buildGiftCodeParams: BuildGiftCodeParams
): Promise<BuildGiftCodeResult> => fullServiceApi.buildGiftCode(buildGiftCodeParams);

export type BuildGiftCodeService = typeof buildGiftCode;
