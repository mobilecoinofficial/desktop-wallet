import type { MobilecoindClient } from '../client';
import { ParseAddressCodeRequest } from '../protos/mobilecoind_api_pb';

const parseAddressCode = async (
  client: MobilecoindClient,
  requestObject: ParseAddressCodeRequest.AsObject
) => {
  const { b58Code } = requestObject;
  const ParseAddressCodeRequestInstance = new ParseAddressCodeRequest();
  ParseAddressCodeRequestInstance.setB58Code(b58Code);

  const ParseAddressCodeResponse = await client.parseAddressCode(
    ParseAddressCodeRequestInstance
  );
  return ParseAddressCodeResponse;
};

export default parseAddressCode;
