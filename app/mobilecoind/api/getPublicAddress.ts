import type { MobilecoindClient } from '../client';
import { GetPublicAddressRequest } from '../protos/mobilecoind_api_pb';

const getPublicAddress = async (
  client: MobilecoindClient,
  requestObject: GetPublicAddressRequest.AsObject
) => {
  const { monitorId, subaddressIndex } = requestObject;
  const GetPublicAddressRequestInstance = new GetPublicAddressRequest();
  GetPublicAddressRequestInstance.setMonitorId(monitorId);
  GetPublicAddressRequestInstance.setSubaddressIndex(subaddressIndex);

  const GetPublicAddressResponse = await client.getPublicAddress(GetPublicAddressRequestInstance);
  return GetPublicAddressResponse;
};

export default getPublicAddress;
