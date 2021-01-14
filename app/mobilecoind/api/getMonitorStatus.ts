import type { MobilecoindClient } from '../client';
import { GetMonitorStatusRequest } from '../protos/mobilecoind_api_pb';

const getMonitorStatus = async (
  client: MobilecoindClient,
  requestObject: GetMonitorStatusRequest.AsObject,
) => {
  const { monitorId } = requestObject;
  const GetMonitorStatusRequestInstance = new GetMonitorStatusRequest();
  GetMonitorStatusRequestInstance.setMonitorId(monitorId);

  const GetMonitorStatusResponse = await client.getMonitorStatus(
    GetMonitorStatusRequestInstance,
  );
  return GetMonitorStatusResponse;
};

export default getMonitorStatus;
