import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings';
import type { AddressAndAmount } from '../../types/TransactionAmount';
import type { OutputTxo, TxProposal } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const BUILD_AND_SUBMIT_TRANSACTION_METHOD = 'build_and_submit_transaction';
// this value comes from the mobilecoin lib. Ideally it would be exposed by full-service but in
// the interest of getting things done fast, we're just hard-coding it here for now

export type BuildAndSubmitTransactionParams = {
  addressesAndAmounts: AddressAndAmount[];
  accountId: StringHex;
  feeValue?: StringUInt64;
  feeTokenId?: StringUInt64;
  inputTxoIds?: StringHex[];
  maxSpendableValue?: StringUInt64;
  tombstoneBlock?: StringUInt64;
  blockVersion?: StringUInt64;
};

export type BuildAndSubmitTransactionResult = {
  feeConfirmation: bigint;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
  txProposalReceiverB58Code: StringB58;
};

type BuildAndSubmitTransactionProposalResponse = {
  txProposal: TxProposal;
};

const buildAndSubmitTransaction = async ({
  addressesAndAmounts,
  accountId,
  feeValue,
  feeTokenId,
  inputTxoIds,
  maxSpendableValue,
  tombstoneBlock,
  blockVersion,
}: BuildAndSubmitTransactionParams): Promise<BuildAndSubmitTransactionResult> => {
  const { result, error }: AxiosFullServiceResponse<BuildAndSubmitTransactionProposalResponse> =
    await axiosFullService(BUILD_AND_SUBMIT_TRANSACTION_METHOD, {
      accountId,
      addressesAndAmounts,
      blockVersion,
      feeTokenId,
      feeValue,
      inputTxoIds,
      maxSpendableValue,
      tombstoneBlock,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  const { txProposal } = result;
  // FIX-ME: assumes only 1 recipient
  const txProposalReceiverB58Code = txProposal.payloadTxos[0].recipientPublicAddressB58;

  // TODO fix type, right now it just matches what the component is expecting
  const totalValueConfirmation = txProposal.payloadTxos
    .map((txo: OutputTxo) => BigInt(txo.amount.value))
    .reduce((acc: bigint, cur: bigint) => acc + cur, BigInt(0));

  const feeConfirmation = BigInt(txProposal.feeAmount.value);
  return {
    feeConfirmation,
    totalValueConfirmation,
    txProposal,
    txProposalReceiverB58Code,
  };
};

export default buildAndSubmitTransaction;
