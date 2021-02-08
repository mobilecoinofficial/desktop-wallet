import type { MobilecoindClient } from '../client';
import { PayAddressCodeRequest } from '../protos/mobilecoind_api_pb';

const payAddressCode = async (
  client: MobilecoindClient,
  requestObject: PayAddressCodeRequest.AsObject
) => {
  const {
    amount,
    fee,
    maxInputUtxoValue,
    receiverB58Code,
    senderMonitorId,
    senderSubaddress,
    tombstone,
  } = requestObject;
  const PayAddressCodeRequestInstance = new PayAddressCodeRequest();
  PayAddressCodeRequestInstance.setAmount(amount.toString()); // convert BigInt to string
  PayAddressCodeRequestInstance.setFee(fee.toString()); // convert BigInt to string
  PayAddressCodeRequestInstance.setMaxInputUtxoValue(maxInputUtxoValue);
  PayAddressCodeRequestInstance.setReceiverB58Code(receiverB58Code);
  PayAddressCodeRequestInstance.setSenderMonitorId(senderMonitorId);
  PayAddressCodeRequestInstance.setSenderSubaddress(senderSubaddress);
  PayAddressCodeRequestInstance.setTombstone(tombstone);

  const PayAddressCodeResponse = await client.payAddressCode(
    PayAddressCodeRequestInstance
  );
  return PayAddressCodeResponse;
};

export default payAddressCode;
