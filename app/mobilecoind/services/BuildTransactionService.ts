import { createAddressCode, generateTx, getUnspentTxOutList, parseAddressCode } from '../api';
import type { TxProposal } from '../protos/mobilecoind_api_pb';
import { Outlay } from '../protos/mobilecoind_api_pb';
import BaseService from './BaseService';

interface BuildTransactionServiceArgs {
  amount: bigint;
  fee: bigint;
  receiverB58Code: string;
  senderMonitorId: Uint8Array;
}

export interface BuildTransactionServiceSuccessData {
  feeConfirmation: bigint;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
  txProposalReceiverB58Code: string;
}

class BuildTransactionService extends BaseService<BuildTransactionServiceArgs> {
  async call() {
    try {
      const { amount, fee, senderMonitorId, receiverB58Code } = this.argsObj;

      // export defqault generateTx;
      //   target_address = self.client.read_request_code(recipient_address_code)[0]
      //   tx_list = self.client.get_unspent_tx_output_list(self.monitor_id, DEFAULT_SUBADDRESS)
      //   outlays =
      //   tx_proposal =
      //       self.client.generate_tx(self.monitor_id, DEFAULT_SUBADDRESS, tx_list, outlays)
      const GetUnspentTxOutListResponse = await getUnspentTxOutList(this.client, {
        monitorId: senderMonitorId,
        subaddressIndex: 0,
      });
      const inputListList = GetUnspentTxOutListResponse.getOutputListList();
      // TODO -- i will probably need to construct this object

      const ParseAddressCodeResponse = await parseAddressCode(this.client, {
        b58Code: receiverB58Code,
      });

      const receiver = ParseAddressCodeResponse.getReceiver();
      if (receiver === undefined) {
        throw new Error('Could not find receiver from public address.');
      }

      const outlayInstance = new Outlay();
      outlayInstance.setValue(amount.toString());
      outlayInstance.setReceiver(receiver);
      const outlayListList = [outlayInstance];

      const GenerateTxResponse = await generateTx(this.client, {
        changeSubaddress: 0,
        fee,
        inputListList,
        outlayListList,
        senderMonitorId,
        senderSubaddress: 0,
        tombstone: 0,
      });

      const txProposal = GenerateTxResponse.getTxProposal();
      if (txProposal === undefined) {
        throw new Error('Could not make gift. No proposal found.');
      }

      const txProposalReceiver = txProposal.getOutlayListList()[0].getReceiver();

      const CreateAddressCodeResponse = await createAddressCode(this.client, {
        receiver: txProposalReceiver,
      });

      const txProposalReceiverB58Code = CreateAddressCodeResponse.getB58Code();
      const totalValueConfirmation = txProposal
        .toObject()
        .outlayListList.map((outlay) => {
          return BigInt(outlay.value);
        })
        .reduce((acc, cur) => {
          return acc + cur;
        });
      const feeConfirmation = BigInt(txProposal.getFee());

      // TODO - when multiple accounts, also confirm the sender account address
      return this.handleSuccess({
        feeConfirmation,
        totalValueConfirmation,
        txProposal,
        txProposalReceiverB58Code,
      });
    } catch (err) {
      return this.handleError(err);
    }
  }
}

// We need to assign to have access to static methods
export default BuildTransactionService;
