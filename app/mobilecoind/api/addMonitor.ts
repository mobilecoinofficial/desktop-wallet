import type { MobilecoindClient } from '../client';
import type { AccountKey } from '../protos/external_pb';
import { AddMonitorRequest } from '../protos/mobilecoind_api_pb';

// Because accountKey expect the grpc object, let's override the
// accountKey type (which would be AccountKey.AsObject) to the expected
// AccountKey grpc-object. While we're here, let's officially make name optional.
type ExcludeAccountKeyAndName<T> = Pick<
T,
Exclude<keyof T, 'accountKey' | 'name'>
>;
interface AddMonitorArgumentOverridenType
  extends ExcludeAccountKeyAndName<AddMonitorRequest.AsObject> {
  accountKey?: AccountKey | undefined;
  name?: string | null;
}

const addMonitor = async (
  client: MobilecoindClient,
  requestObject: AddMonitorArgumentOverridenType,
) => {
  const {
    accountKey,
    firstSubaddress,
    numSubaddresses,
    firstBlock,
    name,
  } = requestObject;
  const AddMonitorRequestInstance = new AddMonitorRequest();
  AddMonitorRequestInstance.setAccountKey(accountKey);
  AddMonitorRequestInstance.setFirstSubaddress(firstSubaddress);
  AddMonitorRequestInstance.setNumSubaddresses(numSubaddresses);
  AddMonitorRequestInstance.setFirstBlock(firstBlock);
  if (name) AddMonitorRequestInstance.setName(name);
  const AddMonitorResponse = await client.addMonitor(AddMonitorRequestInstance);
  return AddMonitorResponse;
};

export default addMonitor;
