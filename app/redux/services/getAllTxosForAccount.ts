import * as fullServiceApi from '../../fullService/api';
import { StringHex } from '../../types';
import { errorToString } from '../../utils/errorHandler';
import sameObject from '../../utils/sameObject';
import { getAllTxosForAccountAction } from '../actions';
import { store } from '../store';

export const getAllTxosForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const txos = await fullServiceApi.getAllTxosForAccount({ accountId });

    if (!sameObject(store.getState().txos, txos)) {
      store.dispatch(getAllTxosForAccountAction(txos));
    }
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};
