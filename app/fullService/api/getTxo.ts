import type { StringHex } from '../../types/SpecialStrings';
import type Txo from '../../types/Txo';
import axiosFullService from '../axiosFullService';

const GET_TXO_METHOD = 'get_txo';

type GetTxoParams = {
  txoId: StringHex;
};

type GetTxoResult = {
  txo: Txo;
};

const getTxo = async ({
  txoId,
}: GetTxoParams): Promise<GetTxoResult> => {
  const { result, error } = await axiosFullService(GET_TXO_METHOD, {
    txo_id: txoId,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getTxo;
