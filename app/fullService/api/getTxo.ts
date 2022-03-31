import type { StringHex } from '../../types/SpecialStrings.d';
import type { Txo } from '../../types/Txo.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_TXO_METHOD = 'get_txo';

type GetTxoParams = {
  txoId: StringHex;
};

type GetTxoResult = {
  txo: Txo;
};

const getTxo = async ({ txoId }: GetTxoParams): Promise<GetTxoResult> => {
  const { result, error }: AxiosFullServiceResponse<GetTxoResult> = await axiosFullService(
    GET_TXO_METHOD,
    {
      txoId,
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

export default getTxo;
