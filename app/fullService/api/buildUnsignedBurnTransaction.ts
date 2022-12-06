import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { TransactionAmount } from '../../types/TransactionAmount';
import type { UnsignedTxProposal } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const BUILD_UNSIGNED_BURN_TRANSACTION_METHOD = 'build_unsigned_burn_transaction';

export type BuildUnsignedBurnTransactionParams = {
  accountId: StringHex;
  amount: TransactionAmount;
  memo: string;
  tombstoneBlock: StringUInt64;
};

export type BuildUnsignedBurnTransactionResult = {
  accountId: StringB58;
  unsignedTxProposal: UnsignedTxProposal;
};

type BuilTransactionProposalResponse = {
  accountId: StringB58;
  unsignedTxProposal: UnsignedTxProposal;
};

const buildUnsignedBurnTransaction = async ({
  accountId,
  amount,
  memo,
  tombstoneBlock,
}: BuildUnsignedBurnTransactionParams): Promise<BuildUnsignedBurnTransactionResult> => {
  const { result, error }: AxiosFullServiceResponse<BuilTransactionProposalResponse> =
    await axiosFullService(BUILD_UNSIGNED_BURN_TRANSACTION_METHOD, {
      accountId,
      amount,
      redemptionMemoHex: memo,
      tombstoneBlock,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to build transaction.');
  }

  return result;
};

export default buildUnsignedBurnTransaction;
