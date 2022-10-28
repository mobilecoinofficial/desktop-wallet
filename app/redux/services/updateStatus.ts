import * as fullServiceApi from '../../fullService/api';
import { Account } from '../../types';
import { updateStatusAction } from '../actions';
import { store } from '../store';

export const updateStatus = async (accountId: string, account: Account): Promise<void> => {
  const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
  store.dispatch(updateStatusAction(account, balanceStatus));
};
