import { store } from '../contexts/FullServiceContext';
import { importAccountAction } from '../contexts/actions/importAccount.action';
import * as fullServiceApi from '../fullService/api';

// Import the wallet should initialize the basic wallet information
// The wallet status
// Accounts + status
const importAccount = async (name: string | null, mnemonic: string): Promise<void> => {
  try {
    // Attempt import
    const { account } = await fullServiceApi.importAccount({
      key_derivation_version: '2',
      mnemonic,
      name,
    });
    const { accountId } = account;

    // Get basic wallet information
    const { walletStatus } = await fullServiceApi.getWalletStatus();
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
    const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
      accountId,
    });
    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

    store.dispatch(
      importAccountAction(
        accountIds,
        accountMap,
        addressIds,
        addressMap,
        account,
        balanceStatus,
        walletStatus
      )
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default importAccount;
export { importAccount };
export type ImportAccountService = typeof importAccount;
