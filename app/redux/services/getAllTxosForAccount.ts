import * as fullServiceApi from '../../fullService/api';
import { StringHex } from '../../types';
import { getAllTxosForAccountAction } from '../actions';
import { store } from '../store';

export const getAllTxosForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const txos = await fullServiceApi.getAllTxosForAccount({ accountId });

    if (store.getState().txos !== txos) {
      store.dispatch(getAllTxosForAccountAction(txos));
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};
