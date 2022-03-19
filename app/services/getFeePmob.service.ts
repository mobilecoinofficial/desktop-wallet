import { updateFeePmobAction } from '../contexts/actions/updateFeePmob.action';
import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';

export const getFeePmob = async (): Promise<void> => {
  const { networkStatus } = await fullServiceApi.getNetworkStatus();
  store.dispatch(updateFeePmobAction(networkStatus.feePmob));
};

export type GetFeePmobService = typeof getFeePmob;
