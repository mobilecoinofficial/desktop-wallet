import * as fullServiceApi from '../../fullService/api';
import { getFeesAction } from '../actions';
import { store } from '../store';

export const getFees = async (): Promise<void> => {
  const { networkStatus } = await fullServiceApi.getNetworkStatus();
  store.dispatch(getFeesAction(networkStatus.fees, networkStatus.blockVersion));
};
