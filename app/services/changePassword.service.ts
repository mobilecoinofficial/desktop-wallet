import { store } from '../contexts/FullServiceContext';
import { updatePassphraseAction } from '../contexts/actions/updatePassphrase.action';
import { encryptAndStorePassphrase, validatePassphrase } from '../utils/authentication';

const changePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
  try {
    const { encryptedPassphrase } = store.state;
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    await validatePassphrase(oldPassword, encryptedPassphrase);
    const newEncryptedPassphrase = await encryptAndStorePassphrase(newPassword);

    store.dispatch(updatePassphraseAction(newEncryptedPassphrase));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default changePassword;
export { changePassword };
export type ChangePasswordService = typeof changePassword;
