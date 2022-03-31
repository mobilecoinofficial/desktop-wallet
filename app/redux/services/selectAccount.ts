import * as fullServiceApi from '../../fullService/api';
import { Accounts, Addresses, SelectedAccount } from '../../types';
import { errorToString } from '../../utils/errorHandler';
import { selectAccountAction } from '../actions';
import { store } from '../store';
import { getAllTransactionLogsForAccount } from './getAllTransactionLogsForAccount';
import { getAllTxosForAccount } from './getAllTxosForAccount';

export const selectAccount = async (accountId: string): Promise<void> => {
  try {
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();

    const p1 = fullServiceApi.getAccount({ accountId });
    const p2 = fullServiceApi.getAllAddressesForAccount({ accountId });
    const p3 = fullServiceApi.getBalanceForAccount({ accountId });
    const p4 = getAllTransactionLogsForAccount(accountId);
    const p5 = getAllTxosForAccount(accountId);

    const { account } = await p1;
    const { addressIds, addressMap } = await p2;
    const { balance: balanceStatus } = await p3;
    await p4;
    await p5;

    const accounts: Accounts = { accountIds, accountMap };
    const addresses: Addresses = { addressIds, addressMap };
    const selectedAccount: SelectedAccount = { account, balanceStatus };

    store.dispatch(selectAccountAction(accounts, addresses, selectedAccount));
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};
