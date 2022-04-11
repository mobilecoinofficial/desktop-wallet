import * as fullServiceApi from '../../fullService/api';
import { getFeePmobAction } from '../actions';
import { store } from '../store';

export const getFeePmob = async (): Promise<void> => {
  const { networkStatus } = await fullServiceApi.getNetworkStatus();
  store.dispatch(getFeePmobAction(networkStatus.feePmob));
};
