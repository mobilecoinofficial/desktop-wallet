import * as fullServiceApi from '../../../fullService/api';
import { decryptContacts } from '../../../services';
import { SelectedAccount } from '../../../types';
import * as localStore from '../../../utils/LocalStore';
import { validatePassphrase } from '../../../utils/authentication';
import { decrypt } from '../../../utils/encryption';
import { store } from '../../store';
import { unlockWalletAction } from './action';

export const unlockWallet = async (
  passphrase: string,
  startInOfflineMode = false
): Promise<void> => {
  try {
    const { encryptedPassphrase } = store.getState();
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    const { secretKey } = await validatePassphrase(passphrase, encryptedPassphrase);

    const contacts = await decryptContacts(secretKey);

    const { walletStatus } = await fullServiceApi.getWalletStatus();

    const firstAccountId = walletStatus.accountIds[0];

    const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({
      accountId: firstAccountId,
    });

    const selectedAccount: SelectedAccount = {
      account: walletStatus.accountMap[firstAccountId],
      balanceStatus,
    };

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
        selectedAccount,
        walletStatus,
        startInOfflineMode
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

export type UnlockWalletService = typeof unlockWallet;
