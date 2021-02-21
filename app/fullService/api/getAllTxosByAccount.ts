import type { StringHex } from '../../types/SpecialStrings';
import type Txo from '../../types/Txo';
import axiosFullService from '../axiosFullService';

const GET_ALL_TXOS_BY_ACCOUNT_METHOD = 'get_all_txos_by_account';

type GetAllTxosByAccountParams = {
  accountId: StringHex;
};

type GetAllTxosByAccountResult = {
  txo_ids: StringHex[];
  txo_map: { [txo_id: string]: Txo };
};

const getAllTxosByAccount = async ({
  accountId,
}: GetAllTxosByAccountParams): Promise<GetAllTxosByAccountResult> => {
  const { result, error } = await axiosFullService(
    GET_ALL_TXOS_BY_ACCOUNT_METHOD,
    {
      account_id: accountId,
    },
  );

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAllTxosByAccount;
