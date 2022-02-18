import type { StringHex } from '../../types/SpecialStrings.d';
import type { Txos } from '../../types/Txo.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ALL_TXOS_FOR_ACCOUNT_METHOD = 'get_all_txos_for_account';

type GetAllTxosByAccountParams = {
  accountId: StringHex;
};

type GetAllTxosByAccountResult = Txos;

const getAllTxosForAccount = async ({
  accountId,
}: GetAllTxosByAccountParams): Promise<GetAllTxosByAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAllTxosByAccountResult> =
    await axiosFullService(GET_ALL_TXOS_FOR_ACCOUNT_METHOD, {
      accountId,
    });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as GetAllTxosByAccountResult;
  }
};

export default getAllTxosForAccount;
