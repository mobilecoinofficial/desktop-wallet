import { store } from '../contexts/FullServiceContext';
import { selectAccountAction } from '../contexts/actions/selectAccount.action';
import * as fullServiceApi from '../fullService/api';

const selectAccount = async (accountId: string): Promise<void> => {
  try {
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();

    const { account } = await fullServiceApi.getAccount({ accountId });

    const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
      accountId,
    });

    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({
      accountId,
    });

    store.dispatch(
      selectAccountAction(accountIds, accountMap, addressIds, addressMap, account, balanceStatus)
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default selectAccount;
export { selectAccount };
export type SelectAccountService = typeof selectAccount;
