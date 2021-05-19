import * as fullServiceApi from '../fullService/api';
import type { RemoveGiftCodeResult } from '../fullService/api/removeGiftCode';

// deleteStoredGiftCodeB58: (storedGiftCodeB58: string) => void;

const deleteStoredGiftCodeB58 = async (storedGiftCodeB58: string): Promise<RemoveGiftCodeResult> =>
  // TO DO - Hook into full service delete gift code API call
  fullServiceApi.removeGiftCode({ giftCodeB58: storedGiftCodeB58 });

export default deleteStoredGiftCodeB58;
export { deleteStoredGiftCodeB58 };
