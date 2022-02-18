import type { ReceiverReceipts } from '../../types/ReceiverReceipt';
import type { TxProposal } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const CREATE_RECEIVER_RECEIPTS_METHOD = 'create_receiver_receipts';

type CreateReceiverReceiptsParams = {
  txProposal: TxProposal;
};

type CreateReceiverReceiptsResult = {
  receiverReceipts: ReceiverReceipts;
};

const createReceiverReceipts = async ({
  txProposal,
}: CreateReceiverReceiptsParams): Promise<CreateReceiverReceiptsResult> => {
  const { result, error }: AxiosFullServiceResponse<CreateReceiverReceiptsResult> =
    await axiosFullService(CREATE_RECEIVER_RECEIPTS_METHOD, {
      txProposal,
    });
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as CreateReceiverReceiptsResult;
  }
};

export default createReceiverReceipts;
