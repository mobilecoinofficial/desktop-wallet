import * as fullServiceApi from '../../fullService/api';
import { deleteAccountAction } from '../actions';
import { store } from '../store';

export const deleteAccount = async (accountId: string): Promise<void> => {
  const result = await fullServiceApi.removeAccount({ accountId });
  const accounts = await fullServiceApi.getAllAccounts();

  store.dispatch(deleteAccountAction(accountId, accounts, result.removed));
};
