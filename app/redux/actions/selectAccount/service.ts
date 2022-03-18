import * as fullServiceApi from '../../../fullService/api';
import { store } from '../../store';
import { fetchAllTransactionLogsForAccount } from '../fetchAllTransactionLogsForAccount/service';
import { fetchAllTxosForAccount } from '../fetchAllTxosForAccount/service';
import { selectAccountAction } from './action';

const selectAccount = async (accountId: string): Promise<void> => {
  try {
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
    const transactionLogs = await fetchAllTransactionLogsForAccount(accountId);

    const p1 = fullServiceApi.getAccount({ accountId });
    const p2 = fullServiceApi.getAllAddressesForAccount({ accountId });
    const p3 = fullServiceApi.getBalanceForAccount({ accountId });
    const p4 = store.dispatch(fetchAllTransactionLogsForAccountAction(transactionLogs)); // change to STARTED etc.
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
