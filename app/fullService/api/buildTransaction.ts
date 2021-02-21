import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings';
import type TxProposal from '../../types/TxProposal';
import axiosFullService from '../axiosFullService';

const BUILD_TRANSACTION_METHOD = 'build_transaction';

type BuildTransactionParams = {
  accountId: StringHex;
  fee?: StringUInt64;
  inputTxoIds?: StringHex[];
  maxSpendableValue?: StringUInt64;
  recipientPublicAddress: StringB58;
  tombstoneBlock?: StringUInt64;
  value: StringUInt64;
};

type BuildTransactionResult = {
  tx_propsal: TxProposal;
};

const buildTransaction = async ({
  accountId,
  fee,
  inputTxoIds,
  maxSpendableValue,
  recipientPublicAddress,
  tombstoneBlock,
  value,
}: BuildTransactionParams): Promise<BuildTransactionResult> => {
  const { result, error } = await axiosFullService(
    BUILD_TRANSACTION_METHOD,
    {
      account_id: accountId,
      fee,
      input_txo_ids: inputTxoIds,
      max_spendable_value: maxSpendableValue,
      recipient_public_address: recipientPublicAddress,
      tombstone_block: tombstoneBlock,
      value,
    },
  );

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default buildTransaction;
