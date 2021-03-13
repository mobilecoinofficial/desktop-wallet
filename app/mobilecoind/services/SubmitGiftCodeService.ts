import * as localStore from '../../utils/LocalStore';
import type { TxProposal } from '../protos/mobilecoind_api_pb';
import BaseService from './BaseService';
import SubmitTransactionService from './SubmitTransactionService';

interface SubmitGiftCodeServiceArgs {
  giftB58Code: string;
  senderMonitorId: Uint8Array;
  txProposal: TxProposal;
}

class SubmitGiftCodeService extends BaseService<SubmitGiftCodeServiceArgs> {
  async call() {
    try {
      const { giftB58Code, senderMonitorId, txProposal } = this.argsObj;
      const SubmitTransactionServiceInstance = new SubmitTransactionService(this.client, {
        senderMonitorId,
        txProposal,
      });
      const { errorMessage, isSuccess } = await SubmitTransactionServiceInstance.call();

      if (isSuccess) {
        const giftCodes = localStore.getGiftCodes() || [];
        // const giftCodes = [];
        if (!Array.isArray(giftCodes)) {
          throw new Error('Cannot find gift codes');
        }

        // TODO - this should definitely be in a util
        const giftValue = txProposal
          .toObject()
          .outlayListList.map((outlay) => {
            return BigInt(outlay.value);
          })
          .reduce((acc, cur) => {
            return acc + cur;
          });
        const giftValueString = giftValue.toString();
        giftCodes.push({ giftB58Code, giftValueString });
        localStore.setGiftCodes(giftCodes);

        // At this point, let's make sure to store the entropy
        // in the context, we can detect the change and begin monitoring the gift code
        // we want the user to be able to retreive the code on click
        // it's not clear to me if these should be encrypted like the account
        return this.handleSuccess({ giftCodes });
      }
      throw new Error(errorMessage);
    } catch (err) {
      return this.handleError(err);
    }
  }
}

export default SubmitGiftCodeService;
