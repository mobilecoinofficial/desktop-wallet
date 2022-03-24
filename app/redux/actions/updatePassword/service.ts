import { ipcRenderer } from 'electron';

import { decryptContacts, getWalletStatus } from '../../../services';
import { deleteEncryptedPin } from '../../../utils/LocalStore';
import * as localStore from '../../../utils/LocalStore';
import { encryptAndStorepassword, validatepassword } from '../../../utils/authentication';
import { encrypt } from '../../../utils/encryption';
import { store } from '../../store';
import { updateContacts } from '../updateContacts/service';
import { updatePasswordAction } from './action';

export const updatePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
  try {
    const { encryptedpassword, pin, secretKey: storeSecretKey } = store.getState();
    if (encryptedpassword === undefined) {
      throw new Error('encryptedpassword assertion failed');
    }

    await validatepassword(oldPassword, encryptedpassword);
    const { secretKey, encryptedpassword: newEncryptedpassword } = await encryptAndStorepassword(
      newPassword
    );

    // delete encrypted PIN based on old secretKey, re-encyrpt and save to local store
    deleteEncryptedPin();
    const encryptedPin = await encrypt(pin ?? '', secretKey);
    localStore.setEncryptedPin(encryptedPin);

    // grab contacts using old secretKey and update after new key is dispatched
    const contacts = await decryptContacts(storeSecretKey);
    store.dispatch(updatePasswordAction(newEncryptedpassword, secretKey));
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

export type UpdatePasswordService = typeof updatePassword;
