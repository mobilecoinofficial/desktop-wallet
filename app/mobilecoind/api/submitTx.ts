import type { MobilecoindClient } from '../client';
import { SubmitTxRequest } from '../protos/mobilecoind_api_pb';
import type { TxProposal } from '../protos/mobilecoind_api_pb';

const submitTx = async (
  client: MobilecoindClient,
  requestObject: { txProposal: TxProposal } // fix this later
) => {
  const { txProposal } = requestObject;
  if (txProposal === undefined) {
    throw new Error('txProposal undefined');
  } // TODO - better errors

  const SubmitTxRequestInstance = new SubmitTxRequest();
  SubmitTxRequestInstance.setTxProposal(txProposal);
  const SubmitTxResponse = await client.submitTx(SubmitTxRequestInstance);

  return SubmitTxResponse;
};

export default submitTx;
