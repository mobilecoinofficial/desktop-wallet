import type { StringHex } from '../../types/SpecialStrings.d';
import type { Txo, TxoV2 } from '../../types/Txo.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertTxoFromV2 } from './getAllTxosForAccount';

const GET_TXO_METHOD = 'get_txo';

type GetTxoParams = {
  txoId: StringHex;
};

type GetTxoResult = {
  txo: Txo;
};

const getTxo = async ({ txoId }: GetTxoParams): Promise<GetTxoResult> => {
  const { result, error }: AxiosFullServiceResponse<{ txo: TxoV2 }> = await axiosFullService(
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
    return { txo: convertTxoFromV2(result.txo) };
  }
};

export default getTxo;
