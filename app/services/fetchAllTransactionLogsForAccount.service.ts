import { store } from '../contexts/FullServiceContext';
import { fetchAllTransactionLogsForAccountAction } from '../contexts/actions/fetchAllTransactionLogsForAccount.action';
import * as fullServiceApi from '../fullService/api';
import type { StringHex } from '../types/SpecialStrings';

const fetchAllTransactionLogsForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const transactionLogs = await fullServiceApi.getAllTransactionLogsForAccount({ accountId });

    // TODO add logic to only trigger if different object
    store.dispatch(fetchAllTransactionLogsForAccountAction(transactionLogs));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchAllTransactionLogsForAccount;
export { fetchAllTransactionLogsForAccount };
export type FetchAllTransactionLogsForAccountService = typeof fetchAllTransactionLogsForAccount;
