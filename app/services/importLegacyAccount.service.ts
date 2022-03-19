import { importAccountAction } from '../contexts/actions/importAccount.action';
import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';

// Import the wallet should initalize the basic wallet information
// The wallet status
// Accounts + status
const importLegacyAccount = async (name: string | null, entropy: string): Promise<void> => {
  try {
    // await wipeAccountContactAndPin();

    // Attempt import
    const { account } = await fullServiceApi.importLegacyAccount({ entropy, name });
    const { accountId } = account;

    // Get basic wallet information
    const { walletStatus } = await fullServiceApi.getWalletStatus();
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
    const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
      accountId,
    });

    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });

    // After successful import, store encryptedPassphrase
    // const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);

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
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export default importLegacyAccount;
export { importLegacyAccount };
export type ImportLegacyAccountService = typeof importLegacyAccount;
