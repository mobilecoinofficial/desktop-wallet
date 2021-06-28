import { store, wipeAccountContactAndPin } from '../contexts/FullServiceContext';
import { createAccountAction } from '../contexts/actions/createAccount.action';
import * as fullServiceApi from '../fullService/api';
import type { PendingSecrets } from '../types/PendingSecrets.d';
import { encryptAndStorePassphrase } from '../utils/authentication';

//   createAccount: (accountName: string | null, passphrase: string) => Promise<void>;

const createAccount = async (name: string | null, passphrase: string): Promise<void> => {
  try {
    await wipeAccountContactAndPin();

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

    // After successful import, store encryptedPassphrase
    const { encryptedPassphrase, secretKey } = await encryptAndStorePassphrase(passphrase);
    store.dispatch(
      createAccountAction(
        accountIds,
        accountMap,
        addressIds,
        addressMap,
        encryptedPassphrase,
        pendingSecrets as PendingSecrets,
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

export default createAccount;
export { createAccount };
export type CreateAccountService = typeof createAccount;
