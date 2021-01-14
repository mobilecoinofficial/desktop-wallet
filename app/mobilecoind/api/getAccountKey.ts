import type { MobilecoindClient } from '../client';
import { GetAccountKeyRequest } from '../protos/mobilecoind_api_pb';

const getAccountKey = async (
  client: MobilecoindClient,
  requestObject: GetAccountKeyRequest.AsObject,
) => {
  const { entropy } = requestObject;
  const GetAccountKeyRequestInstance = new GetAccountKeyRequest();
  GetAccountKeyRequestInstance.setEntropy(entropy);
  const GetAccountKeyResponse = await client.getAccountKey(
    GetAccountKeyRequestInstance,
  );
  return GetAccountKeyResponse;
};

export default getAccountKey;
