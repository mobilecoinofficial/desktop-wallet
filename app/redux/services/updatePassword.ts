import { ipcRenderer } from 'electron';

import { decryptContacts, getWalletStatus } from '../../services';
import { deleteEncryptedPin } from '../../utils/LocalStore';
import * as localStore from '../../utils/LocalStore';
import { encryptAndStorePassword, validatePassword } from '../../utils/authentication';
import { encrypt } from '../../utils/encryption';
import { errorToString } from '../../utils/errorHandler';
import { updatePasswordAction } from '../actions';
import { store } from '../store';
import { updateContacts } from './updateContacts';

export const updatePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
  try {
    const { encryptedPassword, pin, secretKey: storeSecretKey } = store.getState();
    if (encryptedPassword === undefined) {
      throw new Error('encryptedPassword assertion failed');
    }

    await validatePassword(oldPassword, encryptedPassword);
    const { secretKey, encryptedPassword: newEncryptedPassword } = await encryptAndStorePassword(
      newPassword
    );

    // delete encrypted PIN based on old secretKey, re-encyrpt and save to local store
    deleteEncryptedPin();
    const encryptedPin = await encrypt(pin ?? '', secretKey);
    localStore.setEncryptedPin(encryptedPin);

    // grab contacts using old secretKey and update after new key is dispatched
    const contacts = await decryptContacts(storeSecretKey);
    store.dispatch(updatePasswordAction(newEncryptedPassword, secretKey));
    updateContacts(contacts);

    await ipcRenderer.invoke('start-full-service', oldPassword, newPassword);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await getWalletStatus();
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};

export type UpdatePasswordService = typeof updatePassword;
