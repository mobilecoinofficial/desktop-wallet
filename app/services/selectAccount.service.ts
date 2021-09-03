import { store } from '../contexts/FullServiceContext';
import { selectAccountAction } from '../contexts/actions/selectAccount.action';
import * as fullServiceApi from '../fullService/api';
import { fetchAllTransactionLogsForAccount } from './fetchAllTransactionLogsForAccount.service';
import { fetchAllTxosForAccount } from './fetchAllTxosForAccount.service';

const selectAccount = async (accountId: string): Promise<void> => {
  try {
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();

    const p1 = fullServiceApi.getAccount({ accountId });
    const p2 = fullServiceApi.getAllAddressesForAccount({ accountId });
    const p3 = fullServiceApi.getBalanceForAccount({ accountId });
    const p4 = fetchAllTransactionLogsForAccount(accountId);
    const p5 = fetchAllTxosForAccount(accountId);

    const { account } = await p1;
    const { addressIds, addressMap } = await p2;
    const { balance: balanceStatus } = await p3;

    store.dispatch(
      selectAccountAction(accountIds, accountMap, addressIds, addressMap, account, balanceStatus)
    );

    await p4;
    await p5;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default selectAccount;
export { selectAccount };
export type SelectAccountService = typeof selectAccount;
