import * as fullServiceApi from '../../../fullService/api';
import { StringHex } from '../../../types';
import { store } from '../../store';
import { fetchAllTxosForAccountAction } from './action';

export const fetchAllTxosForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const txos = await fullServiceApi.getAllTxosForAccount({ accountId });

    store.dispatch(fetchAllTxosForAccountAction(txos));
  } catch (err) {
    throw new Error(err.message);
  }
};

export type FetchAllTxosForAccountService = typeof fetchAllTxosForAccount;
