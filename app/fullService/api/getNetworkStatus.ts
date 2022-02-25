import type { NetworkStatus } from '../../types/NetworkStatus.d';
import axiosFullService from '../axiosFullService';

const GET_NETWORK_STATUS_METHOD = 'get_network_status';

type GetNetworkStatusResult = {
  networkStatus: NetworkStatus;
};

const getNetworkStatus = async (): Promise<GetNetworkStatusResult> => {
  const { result, error } = await axiosFullService(GET_NETWORK_STATUS_METHOD);
  if (error) {
    throw new Error(error);
  } else {
    return result;
  }
};

export default getNetworkStatus;
