import * as fullServiceApi from '../../fullService/api';
import { getAccountAndBalance } from '../../fullService/api/getAccount';
import { getWalletStatus } from '../../services';
import { Accounts, Addresses, SelectedAccount } from '../../types';
import { errorToString } from '../../utils/errorHandler';
import { selectAccountAction } from '../actions';
import { store } from '../store';
import { getAllTransactionLogsForAccount } from './getAllTransactionLogsForAccount';
import { getAllTxosForAccount } from './getAllTxosForAccount';

export const selectAccount = async (accountId: string): Promise<void> => {
  try {
    const { accountIds, accountMap } = store.getState().accounts;
    const p2 = fullServiceApi.getAllAddressesForAccount({ accountId });
    const p4 = getAllTransactionLogsForAccount(accountId);
    const p5 = getAllTxosForAccount(accountId);
    const walletStatus = await getWalletStatus();
    const { account, balance: balanceStatus } = await getAccountAndBalance({ accountId });

    const { addressIds, addressMap } = await p2;
    await p4;
    await p5;
    const accounts: Accounts = { accountIds, accountMap };
    const addresses: Addresses = { addressIds, addressMap };
    const selectedAccount: SelectedAccount = { account, balanceStatus };

    store.dispatch(selectAccountAction(accounts, addresses, selectedAccount, walletStatus));
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};
