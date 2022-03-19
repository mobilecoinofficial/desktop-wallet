import { ipcRenderer } from 'electron';

import { updatePassphraseAction } from '../redux/actions';
import { store } from '../redux/store';
import { deleteEncryptedPin } from '../utils/LocalStore';
import * as localStore from '../utils/LocalStore';
import { encryptAndStorePassphrase, validatePassphrase } from '../utils/authentication';
import { encrypt } from '../utils/encryption';
import { decryptContacts } from './decryptContacts.service';
import { getWalletStatus } from './getWalletStatus.service';
import { updateContacts } from './updateContacts.service';

export const changePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
  try {
    const { encryptedPassphrase, pin, secretKey: storeSecretKey } = store.getState();
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    await validatePassphrase(oldPassword, encryptedPassphrase);
    const { secretKey, encryptedPassphrase: newEncryptedPassphrase } =
      await encryptAndStorePassphrase(newPassword);

    // delete encrypted PIN based on old secretKey, re-encyrpt and save to local store
    deleteEncryptedPin();
    const encryptedPin = await encrypt(pin ?? '', secretKey);
    localStore.setEncryptedPin(encryptedPin);

    // grab contacts using old secretKey and update after new key is dispatched
    const contacts = await decryptContacts(storeSecretKey);
    store.dispatch(updatePassphraseAction(newEncryptedPassphrase, secretKey));
    updateContacts(contacts);

    await ipcRenderer.invoke('start-full-service', oldPassword, newPassword);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await getWalletStatus();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type ChangePasswordService = typeof changePassword;
