import {
  generateTxFromTxOutList,
  getAccountKey,
  parseTransferCode,
} from '../api';
import { PublicAddress } from '../protos/external_pb';
import type { TxProposal } from '../protos/mobilecoind_api_pb';
import BaseService from './BaseService';

interface OpenGiftCodeServiceArgs {
  giftB58Code: string;
  receiver: PublicAddress;
}

// TODO - BaseService should be built around this concept as general T
export interface OpenGiftCodeServiceSuccessData {
  feeConfirmation: bigint;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
}
// TODO - rename to OpenGiftCodeService
class OpenGiftCodeService extends BaseService<OpenGiftCodeServiceArgs> {
  async call() {
    try {
      const { giftB58Code, receiver } = this.argsObj;
      const ParseTransferCodeResponse = await parseTransferCode(this.client, {
        b58Code: giftB58Code,
      });

      // TODO -- add contains_key_image to mobilecoind
      // that will allow me to see if key is spent
      // is so, I can error here and say "gift code already claimed"

      const giftEntropy = ParseTransferCodeResponse.getEntropy();
      const giftUtxo = ParseTransferCodeResponse.getUtxo();
      if (giftUtxo === undefined) throw new Error("Could not find Gift's utxo.");
      const GetAccountKeyResponse = await getAccountKey(this.client, {
        entropy: giftEntropy,
      });
      const giftAccountKey = GetAccountKeyResponse.getAccountKey();
      if (giftAccountKey === undefined) throw new Error('Could not find Account Key.');

      const GenerateTxFromTxOutListResponse = await generateTxFromTxOutList(
        this.client,
        {
          accountKey: giftAccountKey,
          fee: 0, // TODO - where is this fee coming from? We charge twice?
          inputListList: [giftUtxo],
          receiver,
        },
      );

      const txProposal = GenerateTxFromTxOutListResponse.getTxProposal();
      if (txProposal === undefined) throw new Error('Could not make TxProposal.');

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
        totalValueConfirmation,
        txProposal,
      });
    } catch (err) {
      return this.handleError(err);
    }
  }
}

export default OpenGiftCodeService;
