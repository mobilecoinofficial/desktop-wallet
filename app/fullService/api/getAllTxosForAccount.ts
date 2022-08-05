import type { StringHex } from '../../types/SpecialStrings.d';
import type { Txos, TxoV2, Txo } from '../../types/Txo.d';
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

const getAllTxosForAccount = async ({
  accountId,
}: GetAllTxosByAccountParams): Promise<GetAllTxosByAccountResult> => {
  const {
    result,
    error,
  }: // FIX-ME make a type for this api result
  AxiosFullServiceResponse<{
    txoIds: StringHex[];
    txoMap: { [txoId: string]: TxoV2 };
  }> = await axiosFullService(GET_ALL_TXOS_FOR_ACCOUNT_METHOD, {
    accountId,
  });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return {
      txoIds: result.txoIds,
      txoMap: result.txoIds.reduce(
        (accum: { [txoId: string]: Txo }, key) => ({
          ...accum,
          [key]: convertTxoFromV2(result.txoMap[key]),
        }),
        {}
      ),
    };
  }
};

export default getAllTxosForAccount;
