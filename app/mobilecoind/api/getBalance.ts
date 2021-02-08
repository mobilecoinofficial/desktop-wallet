import type { MobilecoindClient } from '../client';
import { GetBalanceRequest } from '../protos/mobilecoind_api_pb';

const getBalance = async (
  client: MobilecoindClient,
  requestObject: GetBalanceRequest.AsObject
) => {
  const { monitorId, subaddressIndex } = requestObject;
  const GetBalanceRequestInstance = new GetBalanceRequest();
  GetBalanceRequestInstance.setMonitorId(monitorId);
  GetBalanceRequestInstance.setSubaddressIndex(subaddressIndex);

  const GetBalanceResponse = await client.getBalance(GetBalanceRequestInstance);
  return GetBalanceResponse;
};

export default getBalance;
