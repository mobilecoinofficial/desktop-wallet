import * as fullServiceApi from '../../../fullService/api';
import { StringHex } from '../../../types';
import { store } from '../../store';
import { fetchAllTxosForAccountAction } from './action';

export const fetchAllTxosForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const txos = await fullServiceApi.getAllTxosForAccount({ accountId });

    if (store.getState().txos !== txos) {
      store.dispatch(fetchAllTxosForAccountAction(txos));
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type FetchAllTxosForAccountService = typeof fetchAllTxosForAccount;
