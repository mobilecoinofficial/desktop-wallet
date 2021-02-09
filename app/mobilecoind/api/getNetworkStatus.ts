import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import type { MobilecoindClient } from '../client';

const getNetworkStatus = async (client: MobilecoindClient) => {
  const GetNetworkStatusRequestInstance = new Empty();

  const GetNetworkStatusResponse = await client.getNetworkStatus(GetNetworkStatusRequestInstance);
  return GetNetworkStatusResponse;
};

export default getNetworkStatus;
