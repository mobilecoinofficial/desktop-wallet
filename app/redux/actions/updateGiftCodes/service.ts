import * as fullServiceApi from '../../../fullService/api';
import { store } from '../../store';
import { updateGiftCodesAction } from './action';

export const getAllGiftCodes = async (): Promise<void> => {
  const result = await fullServiceApi.getAllGiftCodes();
  store.dispatch(updateGiftCodesAction(result.giftCodes));
};

export type GetAllGiftCodesService = typeof getAllGiftCodes;
