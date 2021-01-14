import { payAddressCode } from '../api';
import BaseService from './BaseService';
import GetStatusService from './GetStatusService';

interface SendPaymentServiceArgs {
  amount: bigint;
  fee: bigint;
  receiverB58Code: string;
  senderMonitorId: Uint8Array;
}

class SendPaymentService extends BaseService<SendPaymentServiceArgs> {
  async call() {
    try {
      const {
        amount, fee, senderMonitorId, receiverB58Code,
      } = this.argsObj;
      await payAddressCode(this.client, {
        amount,
        fee,
        maxInputUtxoValue: null,
        receiverB58Code,
        senderMonitorId,
        senderSubaddress: 0,
        tombstone: 0,
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

// We need to assign to have access to static methods
export default SendPaymentService;
