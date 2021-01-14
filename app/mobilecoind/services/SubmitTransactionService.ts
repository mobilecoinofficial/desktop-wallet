import { submitTx } from '../api';
import type { TxProposal } from '../protos/mobilecoind_api_pb';
import BaseService from './BaseService';
import GetStatusService from './GetStatusService';

interface SubmitTransactionServiceArgs {
  senderMonitorId: Uint8Array;
  txProposal: TxProposal;
}

class SubmitTransactionService extends BaseService<SubmitTransactionServiceArgs> {
  async call() {
    try {
      const { senderMonitorId, txProposal } = this.argsObj;
      await submitTx(this.client, {
        txProposal,
      });

      const GetStatusServiceInstance = new GetStatusService(this.client, {
        monitorId: senderMonitorId,
      });
      const {
        isSuccess,
        data,
        errorMessage,
      } = await GetStatusServiceInstance.call();

      if (isSuccess) {
        return this.handleSuccess(data);
      }
      throw new Error(errorMessage);
    } catch (err) {
      return this.handleError(err);
    }
  }
}

export default SubmitTransactionService;
