import * as fullServiceApi from '../../fullService/api';
import { getAllGiftCodesAction } from '../actions';
import { store } from '../store';

export const getAllGiftCodes = async (): Promise<void> => {
  const result = await fullServiceApi.getAllGiftCodes();
  store.dispatch(getAllGiftCodesAction(result.giftCodes));
};
