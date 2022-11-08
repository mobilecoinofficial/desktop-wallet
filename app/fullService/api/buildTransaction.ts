import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { OutputTxo, TxProposal } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

// TODO - fix the error handling at this level -- when giving the wrong method, for example
const BUILD_TRANSACTION_METHOD = 'build_transaction';

export type BuildTransactionParams = {
  addressesAndAmounts: AddressAndAmount[];
  accountId: StringHex;
  feeValue?: StringUInt64;
  feeTokenId?: StringUInt64;
  inputTxoIds?: StringHex[];
  maxSpendableValue?: StringUInt64;
  tombstoneBlock?: StringUInt64;
  blockVersion?: StringUInt64;
};

export type AddressAndAmount = [StringB58, TransactionAmount];
export type TransactionAmount = {
  value: StringUInt64;
  tokenId: StringUInt64;
};

export type BuildTransactionResult = {
  feeConfirmation: bigint;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
  txProposalReceiverB58Code: StringB58;
};

type BuilTransactionProposalResponse = {
  txProposal: TxProposal;
};

const buildTransaction = async ({
  addressesAndAmounts,
  accountId,
  feeValue,
  feeTokenId,
  inputTxoIds,
  maxSpendableValue,
  tombstoneBlock,
  blockVersion,
}: BuildTransactionParams): Promise<BuildTransactionResult> => {
  const { result, error }: AxiosFullServiceResponse<BuilTransactionProposalResponse> =
    await axiosFullService(BUILD_TRANSACTION_METHOD, {
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

export default buildTransaction;
