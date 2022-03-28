import * as fullServiceApi from '../../fullService/api';
import { decryptContacts } from '../../services';
import { SelectedAccount } from '../../types';
import * as localStore from '../../utils/LocalStore';
import { validatePassword } from '../../utils/authentication';
import { decrypt } from '../../utils/encryption';
import { unlockWalletAction } from '../actions';
import { store } from '../store';

export const unlockWallet = async (password: string, startInOfflineMode = false): Promise<void> => {
  try {
    const { encryptedPassword } = store.getState();
    if (encryptedPassword === undefined) {
      throw new Error('encryptedPassword assertion failed');
    }

    const { secretKey } = await validatePassword(password, encryptedPassword);

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
