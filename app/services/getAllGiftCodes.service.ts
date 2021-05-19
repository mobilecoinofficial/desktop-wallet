import { store } from '../contexts/FullServiceContext';
import { updateGiftCodesAction } from '../contexts/actions/updateGiftCodes.action';
import * as fullServiceApi from '../fullService/api';

//   getAllGiftCodes: () => Promise<void>;

const getAllGiftCodes = async (): Promise<void> => {
  const result = await fullServiceApi.getAllGiftCodes();
  store.dispatch(updateGiftCodesAction(result.giftCodes));
};

export default getAllGiftCodes;
export { getAllGiftCodes };
