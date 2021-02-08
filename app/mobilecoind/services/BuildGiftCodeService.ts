import { generateTransferCodeTx, getUnspentTxOutList } from '../api';
import type { TxProposal } from '../protos/mobilecoind_api_pb';
import BaseService from './BaseService';

interface BuildGiftCodeServiceArgs {
  fee: bigint;
  senderMonitorId: Uint8Array;
  value: bigint;
}

// TODO - BaseService should be built around this concept as general T
export interface BuildGiftCodeServiceSuccessData {
  feeConfirmation: bigint;
  giftB58Code: string;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
}
class BuildGiftCodeService extends BaseService<BuildGiftCodeServiceArgs> {
  async call() {
    try {
      const { senderMonitorId, value, fee } = this.argsObj;
      const GetUnspentTxOutListResponse = await getUnspentTxOutList(this.client, {
        monitorId: senderMonitorId,
        subaddressIndex: 0,
      });
      const inputListList = GetUnspentTxOutListResponse.getOutputListList();
      const GenerateTransferCodeTxResponse = await generateTransferCodeTx(this.client, {
        changeSubaddress: 0,
        fee,
        inputListList,
        senderMonitorId,
        tombstone: 0,
        value,
      });
      const txProposal = GenerateTransferCodeTxResponse.getTxProposal();
      if (txProposal === undefined) {
        throw new Error('Could not make gift. No proposal found.');
      }

      const giftB58Code = GenerateTransferCodeTxResponse.getB58Code();
      // TODO - this logic should probably live in a util, we'll need it again
      // for correctly building SendPayment confirmations (when we nuke payAddressCode)
      const totalValueConfirmation = txProposal
        .toObject()
        .outlayListList.map((outlay) => {
          return BigInt(outlay.value);
        })
        .reduce((acc, cur) => {
          return acc + cur;
        });
      const feeConfirmation = BigInt(txProposal.getFee());

      return this.handleSuccess({
        feeConfirmation,
        giftB58Code,
        totalValueConfirmation,
        txProposal,
      });
    } catch (err) {
      return this.handleError(err);
    }
  }
}

// We need to assign to have access to static methods
export default BuildGiftCodeService;
