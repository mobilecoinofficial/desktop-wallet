import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { AddressAndAmount } from '../../types/TransactionLog';
import type { UnsignedTxProposal } from '../../types/TxProposal';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const BUILD_UNSIGNED_TRANSACTION_METHOD = 'build_unsigned_transaction';

export type BuildUnsignedTransactionParams = {
  accountId: StringHex;
  addressesAndAmounts: AddressAndAmount[];
  feeValue: StringUInt64;
};

export type BuildUnsignedTransactionResult = {
  accountId: StringB58;
  unsignedTxProposal: UnsignedTxProposal;
};

type BuilTransactionProposalResponse = {
  accountId: StringB58;
  unsignedTxProposal: UnsignedTxProposal;
};

const buildUnsignedTransaction = async ({
  addressesAndAmounts,
  accountId,
  feeValue,
}: BuildUnsignedTransactionParams): Promise<BuildUnsignedTransactionResult> => {
  const { result, error }: AxiosFullServiceResponse<BuilTransactionProposalResponse> =
    await axiosFullService(BUILD_UNSIGNED_TRANSACTION_METHOD, {
      accountId,
      addressesAndAmounts,
      feeValue,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  return result;
};

export default buildUnsignedTransaction;
