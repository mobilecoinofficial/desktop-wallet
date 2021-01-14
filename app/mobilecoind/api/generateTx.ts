import type { MobilecoindClient } from '../client';
import { GenerateTxRequest } from '../protos/mobilecoind_api_pb';

const generateTx = async (
  client: MobilecoindClient,
  requestObject: GenerateTxRequest.AsObject,
) => {
  const {
    senderMonitorId,
    changeSubaddress,
    inputListList,
    outlayListList,
    fee,
    tombstone,
  } = requestObject;
  const GenerateTxRequestInstance = new GenerateTxRequest();
  GenerateTxRequestInstance.setSenderMonitorId(senderMonitorId);
  GenerateTxRequestInstance.setChangeSubaddress(changeSubaddress);
  GenerateTxRequestInstance.setInputListList(inputListList);
  GenerateTxRequestInstance.setOutlayListList(outlayListList);
  GenerateTxRequestInstance.setFee(fee.toString()); // convert BigInt to string
  GenerateTxRequestInstance.setTombstone(tombstone);
  const GenerateTxResponse = await client.generateTx(GenerateTxRequestInstance);
  return GenerateTxResponse;
};

export default generateTx;
