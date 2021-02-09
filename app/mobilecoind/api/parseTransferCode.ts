import type { MobilecoindClient } from '../client';
import { ParseTransferCodeRequest } from '../protos/mobilecoind_api_pb';

const parseTransferCode = async (
  client: MobilecoindClient,
  requestObject: ParseTransferCodeRequest.AsObject
) => {
  const { b58Code } = requestObject;
  const ParseTransferCodeRequestInstance = new ParseTransferCodeRequest();
  ParseTransferCodeRequestInstance.setB58Code(b58Code);

  const ParseTransferCodeResponse = await client.parseTransferCode(
    ParseTransferCodeRequestInstance
  );
  return ParseTransferCodeResponse;
};

export default parseTransferCode;
