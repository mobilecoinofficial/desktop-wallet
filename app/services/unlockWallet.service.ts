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

    const contacts = await decryptContacts(secretKey);

    const { walletStatus } = await fullServiceApi.getWalletStatus();

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
      unlockWalletAction(contacts, isPinRequired, pin, pinThresholdPmob, secretKey, walletStatus)
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default unlockWallet;
export { unlockWallet };
export type UnlockWalletService = typeof unlockWallet;
