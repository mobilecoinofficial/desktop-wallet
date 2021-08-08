import { store } from '../contexts/FullServiceContext';
import { createAccountAction } from '../contexts/actions/createAccount.action';
import * as fullServiceApi from '../fullService/api';
import type { PendingSecrets } from '../types/PendingSecrets.d';

const createAccount = async (name: string): Promise<void> => {
  try {
    // Attempt create
    const { account } = await fullServiceApi.createAccount({ name });
    const { accountId } = account;

    // Get basic wallet information
    const { accountSecrets: pendingSecrets } = await fullServiceApi.exportAccountSecrets({
      accountId,
    });

    const { walletStatus } = await fullServiceApi.getWalletStatus();
    const { accountIds, accountMap } = walletStatus;
    const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
      accountId,
    });
    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

    store.dispatch(
      createAccountAction(
        accountIds,
        accountMap,
        addressIds,
        addressMap,
        pendingSecrets as PendingSecrets,
        account,
        balanceStatus,
        walletStatus
      )
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default createAccount;
export { createAccount };
export type CreateAccountService = typeof createAccount;
