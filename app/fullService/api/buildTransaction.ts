import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { Outlay, TxProposal } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

// TODO - fix the error handling at this level -- when giving the wrong method, for example
const BUILD_TRANSACTION_METHOD = 'build_transaction';

export type BuildTransactionParams = {
  accountId: StringHex;
  fee?: StringUInt64;
  inputTxoIds?: StringHex[];
  maxSpendableValue?: StringUInt64;
  recipientPublicAddress: StringB58;
  tombstoneBlock?: StringUInt64;
  valuePmob: StringUInt64;
};

export type BuildTransactionResult = {
  feeConfirmation: bigint;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
  txProposalReceiverB58Code: StringB58;
};

const buildTransaction = async ({
  accountId,
  fee,
  inputTxoIds,
  maxSpendableValue,
  recipientPublicAddress,
  tombstoneBlock,
  valuePmob,
}: BuildTransactionParams): Promise<BuildTransactionResult> => {
  const { result, error }: AxiosFullServiceResponse<{ txProposal: TxProposal }> =
    await axiosFullService(BUILD_TRANSACTION_METHOD, {
      accountId,
      fee,
      inputTxoIds,
      maxSpendableValue,
      recipientPublicAddress,
      tombstoneBlock,
      valuePmob,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  const { txProposal } = result;
  // FIX-ME: assumes only 1 recipient
  const txProposalReceiverB58Code = recipientPublicAddress;

  // TODO fix type, right now it just matches what the component is expecting
  const totalValueConfirmation = txProposal.outlayList
    .map((outlay: Outlay) => BigInt(outlay.value))
    .reduce((acc: bigint, cur: bigint) => acc + cur, BigInt(0));

  const feeConfirmation = BigInt(txProposal.fee);
  return {
    feeConfirmation,
    totalValueConfirmation,
    txProposal,
    txProposalReceiverB58Code,
  };
};

export default buildTransaction;
