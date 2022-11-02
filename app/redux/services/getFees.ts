import * as fullServiceApi from '../../fullService/api';
import { getFeesAction } from '../actions';
import { store } from '../store';

// ideally these would be retreived from the network, but that's not possible for offline mode
export const HARDCODED_FEES = {
  0: '400000000',
  1: '2560',
};

export const getFees = async (): Promise<void> => {
  const { networkStatus } = await fullServiceApi.getNetworkStatus();
  store.dispatch(getFeesAction(networkStatus.fees));
};
