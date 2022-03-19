import { fetchAllTxosForAccountAction } from '../contexts/actions/fetchAllTxosForAccount.action';
import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
import type { StringHex } from '../types/SpecialStrings';

export const fetchAllTxosForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const txos = await fullServiceApi.getAllTxosForAccount({ accountId });

    // TODO add logic to only trigger if different object
    store.dispatch(fetchAllTxosForAccountAction(txos));
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type FetchAllTxosForAccountService = typeof fetchAllTxosForAccount;
