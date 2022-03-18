import { Txos } from '../../../types';
import { FetchAllTxosForAccountAction, FETCH_ALL_TXOS_FOR_ACCOUNT } from './type';

export const fetchAllTxosForAccountAction = (txos: Txos): FetchAllTxosForAccountAction => ({
  payload: { txos },
  type: FETCH_ALL_TXOS_FOR_ACCOUNT,
});
