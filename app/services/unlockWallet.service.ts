import { store } from '../contexts/FullServiceContext';
import { unlockWalletAction } from '../contexts/actions/unlockWallet.action';
import * as fullServiceApi from '../fullService/api';
import * as localStore from '../utils/LocalStore';
import { validatePassphrase } from '../utils/authentication';
import { decrypt } from '../utils/encryption';
import { decryptContacts } from './decryptContacts.service';

const unlockWallet = async (passphrase: string): Promise<void> => {
  try {
    const { encryptedPassphrase } = store.state;
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    const { secretKey } = await validatePassphrase(passphrase, encryptedPassphrase);

    // Get main account id
    const { accountIds, accountMap } = await fullServiceApi.getAllAccounts();
    // TODO - need better metadata for this; come back and use config data
    const selectedAccount = accountMap[accountIds[0]];

    // Decrypt Contacts
    const contacts = await decryptContacts(secretKey);

    // Get basic wallet information
    const { walletStatus } = await fullServiceApi.getWalletStatus();

    const { addressIds, addressMap } = await fullServiceApi.getAllAddressesForAccount({
      accountId: selectedAccount.accountId,
    });

    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({
      accountId: selectedAccount.accountId,
    });

    // Determine if PIN needs to be set (edge case)
    let isPinRequired = false;
    let pin;
    const encryptedPin = localStore.getEncryptedPin();
    const pinThresholdPmob = localStore.getPinThresholdPmob();

    if (encryptedPin === undefined) {
      isPinRequired = true;
    } else {
      pin = (await decrypt(encryptedPin, secretKey)) as string;
    }

    store.dispatch(
      unlockWalletAction(
        accountIds,
        accountMap,
        addressIds,
        addressMap,
        contacts,
        isPinRequired,
        pin,
        pinThresholdPmob,
        secretKey,
        selectedAccount,
        balanceStatus,
        walletStatus
      )
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default unlockWallet;
export { unlockWallet };
export type UnlockWalletService = typeof unlockWallet;
