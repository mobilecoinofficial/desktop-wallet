import { Txos } from '../../../types';

export const FETCH_ALL_TXOS_FOR_ACCOUNT = 'FETCH_ALL_TXOS_FOR_ACCOUNT';

export type FetchAllTxosForAccountAction = {
  payload: {
    txos: Txos;
  };
  type: 'FETCH_ALL_TXOS_FOR_ACCOUNT';
};
