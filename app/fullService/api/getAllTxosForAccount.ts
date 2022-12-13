import type { StringHex } from '../../types/SpecialStrings.d';
import type { Txos, TxoV2, Txo, TxosV2 } from '../../types/Txo.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ALL_TXOS_FOR_ACCOUNT_METHOD = 'get_txos';

type GetAllTxosByAccountParams = {
  accountId: StringHex;
};

type GetAllTxosByAccountResult = Txos;

export function convertTxoFromV2(txoV2: TxoV2): Txo {
  return {
    eFogHint: txoV2.eFogHint,
    keyImage: txoV2.keyImage || null,
    publicKey: txoV2.publicKey,
    spentBlockIndex: txoV2.spentBlockIndex || null,
    subaddressIndex: txoV2.subaddressIndex || null,
    targetKey: txoV2.targetKey,
    txoId: txoV2.id,
    valuePmob: txoV2.value,
  };
}

export const getTxosV2 = async ({ accountId }: GetAllTxosByAccountParams): Promise<TxosV2> => {
  const { result, error }: AxiosFullServiceResponse<TxosV2> = await axiosFullService(
    GET_ALL_TXOS_FOR_ACCOUNT_METHOD,
    {
      accountId,
      limit: 10000,
    }
  );
  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

const getAllTxosForAccount = async ({
  accountId,
}: GetAllTxosByAccountParams): Promise<GetAllTxosByAccountResult> => {
  const txosV2 = await getTxosV2({ accountId });

  return {
    txoIds: txosV2.txoIds,
    txoMap: txosV2.txoIds.reduce(
      (accum: { [txoId: string]: Txo }, key) => ({
        ...accum,
        [key]: convertTxoFromV2(txosV2.txoMap[key]),
      }),
      {}
    ),
  };
};

export default getAllTxosForAccount;
