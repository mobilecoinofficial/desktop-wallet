import * as fullServiceApi from '../../../fullService/api';
import { store } from '../../store';
import { deleteAccountAction } from './action';

export const deleteAccount = async (accountId: string): Promise<void> => {
  const result = await fullServiceApi.removeAccount({ accountId });
  const accounts = await fullServiceApi.getAllAccounts();

  store.dispatch(deleteAccountAction(accountId, accounts, result.removed));
};

export type DeleteAccountService = typeof deleteAccount;
