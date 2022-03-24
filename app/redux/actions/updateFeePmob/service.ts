import * as fullServiceApi from '../../../fullService/api';
import { store } from '../../store';
import { updateFeePmobAction } from './action';

export const getFeePmob = async (): Promise<void> => {
  const { networkStatus } = await fullServiceApi.getNetworkStatus();
  store.dispatch(updateFeePmobAction(networkStatus.feePmob));
};

export type GetFeePmobService = typeof getFeePmob;
