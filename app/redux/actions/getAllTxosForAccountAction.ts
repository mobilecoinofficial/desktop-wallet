import { Txos } from '../../types';

export const GET_ALL_TXOS_FOR_ACCOUNT = 'GET_ALL_TXOS_FOR_ACCOUNT';

export type GetAllTxosForAccountAction = {
  payload: {
    txos: Txos;
  };
  type: 'GET_ALL_TXOS_FOR_ACCOUNT';
};

export const getAllTxosForAccountAction = (txos: Txos): GetAllTxosForAccountAction => ({
  payload: { txos },
  type: GET_ALL_TXOS_FOR_ACCOUNT,
});
