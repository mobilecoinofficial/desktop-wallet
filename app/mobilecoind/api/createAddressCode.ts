import type { MobilecoindClient } from '../client';
import { CreateAddressCodeRequest } from '../protos/mobilecoind_api_pb';

const createAddressCode = async (
  client: MobilecoindClient,
  requestObject: CreateAddressCodeRequest.AsObject,
) => {
  const { receiver } = requestObject;
  const CreateAddressCodeRequestInstance = new CreateAddressCodeRequest();
  CreateAddressCodeRequestInstance.setReceiver(receiver);
  const CreateAddressCodeResponse = await client.createAddressCode(
    CreateAddressCodeRequestInstance,
  );
  return CreateAddressCodeResponse;
};

export default createAddressCode;
