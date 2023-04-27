import type { NetworkStatus, NetworkStatusV2 } from '../../types/NetworkStatus.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_NETWORK_STATUS_METHOD = 'get_network_status';

type GetNetworkStatusResult = {
  networkStatus: NetworkStatus;
};

type GetNetworkStatusResultV2 = {
  networkStatus: NetworkStatusV2;
};

function convertNetworkStatusFromV2(networkStatus: NetworkStatusV2): GetNetworkStatusResult {
  return {
    networkStatus: {
      blockVersion: networkStatus.blockVersion,
      fees: networkStatus.fees,
      localBlockHeight: networkStatus.localBlockHeight,
      network: networkStatus.networkInfo.chain_id,
      networkBlockHeight: networkStatus.networkBlockHeight,
    },
  };
}

const getNetworkStatus = async (): Promise<GetNetworkStatusResult> => {
  const { result, error }: AxiosFullServiceResponse<GetNetworkStatusResultV2> =
    await axiosFullService(GET_NETWORK_STATUS_METHOD, null);

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return convertNetworkStatusFromV2(result.networkStatus);
  }
};

export default getNetworkStatus;
