import { store } from '../contexts/FullServiceContext';
import { updatePassphraseAction } from '../contexts/actions/updatePassphrase.action';
import { deleteEncryptedPin } from '../utils/LocalStore';
import * as localStore from '../utils/LocalStore';
import { encryptAndStorePassphrase, validatePassphrase } from '../utils/authentication';
import { encrypt } from '../utils/encryption';

const changePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
  try {
    const { encryptedPassphrase, pin } = store.state;
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    await validatePassphrase(oldPassword, encryptedPassphrase);
    const {
      secretKey,
      encryptedPassphrase: newEncryptedPassphrase,
    } = await encryptAndStorePassphrase(newPassword);

    // delete encrypted PIN based on old secretKey, re-encyrpt and save to local store
    deleteEncryptedPin();
    const encryptedPin = await encrypt(pin, secretKey);
    localStore.setEncryptedPin(encryptedPin);

    store.dispatch(updatePassphraseAction(newEncryptedPassphrase, secretKey));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default changePassword;
export { changePassword };
export type ChangePasswordService = typeof changePassword;
