import type { Txos } from '../../types/Txo.d';

export const FETCH_ALL_TXOS_FOR_ACCOUNT = 'FETCH_ALL_TXOS_FOR_ACCOUNT';

export type FetchAllTxosForAccountActionType = {
  payload: {
    txos: Txos;
  };
  type: 'FETCH_ALL_TXOS_FOR_ACCOUNT';
};

export const fetchAllTxosForAccountAction = (txos: Txos): FetchAllTxosForAccountActionType => ({
  payload: { txos },
  type: FETCH_ALL_TXOS_FOR_ACCOUNT,
});
