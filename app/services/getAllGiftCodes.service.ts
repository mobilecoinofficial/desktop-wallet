import { updateGiftCodesAction } from '../contexts/actions/updateGiftCodes.action';
import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';

export const getAllGiftCodes = async (): Promise<void> => {
  const result = await fullServiceApi.getAllGiftCodes();
  store.dispatch(updateGiftCodesAction(result.giftCodes));
};

export type GetAllGiftCodesService = typeof getAllGiftCodes;
