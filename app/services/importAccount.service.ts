import { store, wipeAccountContactAndPin } from '../contexts/FullServiceContext';
import { importAccountAction } from '../contexts/actions/importAccount.action';
import * as fullServiceApi from '../fullService/api';
import { encryptAndStorePassphrase } from '../utils/authentication';

// Import the wallet should initialize the basic wallet information
// The wallet status
// Accounts + status
const importAccount = async (
  name: string | null,
  mnemonic: string,
  passphrase: string
): Promise<void> => {
  try {
    await wipeAccountContactAndPin();

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

    // After successful import, store encryptedPassphrase
    const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);

    store.dispatch(
      importAccountAction(
        accountIds,
        accountMap,
        addressIds,
        addressMap,
        encryptedPassphrase,
        secretKey,
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
