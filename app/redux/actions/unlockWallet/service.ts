import * as fullServiceApi from '../../../fullService/api';
import { decryptContacts } from '../../../services';
import * as localStore from '../../../utils/LocalStore';
import { validatePassphrase } from '../../../utils/authentication';
import { decrypt } from '../../../utils/encryption';
import { store } from '../../store';
import { unlockWalletAction } from './action';

const unlockWallet = async (passphrase: string, startInOfflineMode = false): Promise<void> => {
  try {
    const { encryptedPassphrase } = store.getState();
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
      unlockWalletAction(
        contacts,
        isPinRequired,
        pin,
        pinThresholdPmob,
        secretKey,
        walletStatus,
        startInOfflineMode
      )
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export default unlockWallet;
export { unlockWallet };
export type UnlockWalletService = typeof unlockWallet;
