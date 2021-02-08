import type { MobilecoindClient } from '../client';
import { GenerateTxFromTxOutListRequest } from '../protos/mobilecoind_api_pb';

const generateTxFromTxOutList = async (
  client: MobilecoindClient,
  requestObject: GenerateTxFromTxOutListRequest.AsObject
) => {
  const { accountKey, inputListList, receiver, fee } = requestObject;
  const GenerateTxFromTxOutListRequestInstance = new GenerateTxFromTxOutListRequest();
  GenerateTxFromTxOutListRequestInstance.setAccountKey(accountKey);
  GenerateTxFromTxOutListRequestInstance.setInputListList(inputListList);
  GenerateTxFromTxOutListRequestInstance.setReceiver(receiver);
  GenerateTxFromTxOutListRequestInstance.setFee(fee);
  const GenerateTxFromTxOutListResponse = await client.generateTxFromTxOutList(
    GenerateTxFromTxOutListRequestInstance
  );
  return GenerateTxFromTxOutListResponse;
};

export default generateTxFromTxOutList;
