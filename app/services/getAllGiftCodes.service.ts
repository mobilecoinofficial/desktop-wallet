import { store } from '../contexts/FullServiceContext';
import { updateGiftCodesAction } from '../contexts/actions/updateGiftCodes.action';
import * as fullServiceApi from '../fullService/api';

const getAllGiftCodes = async (): Promise<void> => {
  const result = await fullServiceApi.getAllGiftCodes();
  store.dispatch(updateGiftCodesAction(result.giftCodes));
};

export default getAllGiftCodes;
export { getAllGiftCodes };
export type GetAllGiftCodesService = typeof getAllGiftCodes;
