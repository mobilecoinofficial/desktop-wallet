import type { MobilecoindClient } from '../client';
import { GetUnspentTxOutListRequest } from '../protos/mobilecoind_api_pb';

const getUnspentTxOutList = async (
  client: MobilecoindClient,
  requestObject: GetUnspentTxOutListRequest.AsObject
) => {
  const { monitorId, subaddressIndex } = requestObject;
  const GetUnspentTxOutListRequestInstance = new GetUnspentTxOutListRequest();
  GetUnspentTxOutListRequestInstance.setMonitorId(monitorId);
  GetUnspentTxOutListRequestInstance.setSubaddressIndex(subaddressIndex);
  const GetUnspentTxOutListResponse = await client.getUnspentTxOutList(
    GetUnspentTxOutListRequestInstance
  );

  return GetUnspentTxOutListResponse;
};

export default getUnspentTxOutList;
