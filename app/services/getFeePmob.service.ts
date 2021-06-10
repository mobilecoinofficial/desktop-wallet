import { store } from '../contexts/FullServiceContext';
import { updateFeePmobAction } from '../contexts/actions/updateFeePmob.action';
import * as fullServiceApi from '../fullService/api';

const getFeePmob = async (): Promise<void> => {
  const { networkStatus } = await fullServiceApi.getNetworkStatus();
  store.dispatch(updateFeePmobAction(networkStatus.feePmob));
};

export default getFeePmob;
export { getFeePmob };
export type GetFeePmobService = typeof getFeePmob;
