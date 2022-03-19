import { deleteAccountAction } from '../contexts/actions/deleteAccount.action';
import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
// import { selectAccount } from './selectAccount.service';

// TODO - Hook into full service delete gift code API call
export const deleteAccount = async (accountId: string): Promise<void> => {
  const result = await fullServiceApi.removeAccount({ accountId });
  const accounts = await fullServiceApi.getAllAccounts();

  // if (result.removed && store.state.selectedAccount.account.accountId === accountId) {
  //   await selectAccount(accounts.accountIds.length > 0 ? accounts.accountIds[0] : undefined);
  // }

  store.dispatch(deleteAccountAction(accountId, accounts, result.removed));
};

export type DeleteAccountService = typeof deleteAccount;
