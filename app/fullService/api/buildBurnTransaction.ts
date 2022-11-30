import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { TransactionAmount } from '../../types/TransactionAmount';
import type { OutputTxo, TxProposal } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const BUILD_BURN_TRANSACTION_METHOD = 'build_burn_transaction';

export type BuildBurnTransactionParams = {
  amount: TransactionAmount;
  accountId: StringHex;
  feeValue?: StringUInt64;
  feeTokenId?: StringUInt64;
  memo: string;
  tombstoneBlock?: StringUInt64;
  blockVersion?: StringUInt64;
};

export type BuildBurnTransactionResult = TxProposal;

type BuildBurnTransactionProposalResponse = {
  txProposal: TxProposal;
};

const buildBurnTransaction = async ({
  accountId,
  amount,
  feeValue,
  feeTokenId,
  memo,
  tombstoneBlock,
  blockVersion,
}: BuildBurnTransactionParams): Promise<BuildBurnTransactionResult> => {
  const { result, error }: AxiosFullServiceResponse<BuildBurnTransactionProposalResponse> =
    await axiosFullService(BUILD_BURN_TRANSACTION_METHOD, {
      accountId,
      amount,
      blockVersion,
      feeTokenId,
      feeValue,
      redemptionMemoHex: memo,
      tombstoneBlock,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failed to build burn transaction.');
  }
  console.log(result);
  const { txProposal } = result;

  return txProposal;
};

export default buildBurnTransaction;
