import { store } from '../contexts/FullServiceContext';
import { fetchAllTxosForAccountAction } from '../contexts/actions/fetchAllTxosForAccount.action';
import * as fullServiceApi from '../fullService/api';
import type { StringHex } from '../types/SpecialStrings';

const fetchAllTxosForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const txos = await fullServiceApi.getAllTxosForAccount({
      accountId,
    });

    // TODO add logic to only trigger if different object
    store.dispatch(fetchAllTxosForAccountAction(txos));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchAllTxosForAccount;
export { fetchAllTxosForAccount };
