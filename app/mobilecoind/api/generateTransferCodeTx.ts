import type { MobilecoindClient } from '../client';
import { GenerateTransferCodeTxRequest } from '../protos/mobilecoind_api_pb';

const generateTransferCodeTx = async (
  client: MobilecoindClient,
  requestObject: GenerateTransferCodeTxRequest.AsObject,
) => {
  const {
    senderMonitorId,
    changeSubaddress,
    inputListList,
    value,
    fee,
    tombstone,
  } = requestObject;
  const GenerateTransferCodeTxRequestInstance = new GenerateTransferCodeTxRequest();
  GenerateTransferCodeTxRequestInstance.setSenderMonitorId(senderMonitorId);
  GenerateTransferCodeTxRequestInstance.setChangeSubaddress(changeSubaddress);
  GenerateTransferCodeTxRequestInstance.setInputListList(inputListList);
  GenerateTransferCodeTxRequestInstance.setValue(value.toString()); // convert BigInt to string
  GenerateTransferCodeTxRequestInstance.setFee(fee.toString()); // convert BigInt to string
  GenerateTransferCodeTxRequestInstance.setTombstone(tombstone);
  const GenerateTransferCodeTxResponse = await client.generateTransferCodeTx(
    GenerateTransferCodeTxRequestInstance,
  );
  return GenerateTransferCodeTxResponse;
};

export default generateTransferCodeTx;
