import * as fullServiceApi from '../fullService/api';
import type { RemoveGiftCodeResult } from '../fullService/api/removeGiftCode';

// TODO - Hook into full service delete gift code API call
export const deleteStoredGiftCodeB58 = async (
  storedGiftCodeB58: string
): Promise<RemoveGiftCodeResult> =>
  fullServiceApi.removeGiftCode({ giftCodeB58: storedGiftCodeB58 });

export type DeleteStoredGiftCodeB58Service = typeof deleteStoredGiftCodeB58;
