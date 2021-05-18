import { store } from '../contexts/FullServiceContext';
import * as fullServiceApi from '../fullService/api';
import { validatePassphrase } from '../utils/authentication';

const retrieveEntropy = async (passphrase: string): Promise<string> => {
  try {
    const { encryptedPassphrase, selectedAccount } = store.state;
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    // TODO - use secretKey returned here to pass to Full-Service to get secrets.
    await validatePassphrase(passphrase, encryptedPassphrase);

    const { accountSecrets } = await fullServiceApi.exportAccountSecrets({
      accountId: selectedAccount.account.accountId,
    });

    return accountSecrets.entropy ?? accountSecrets.mnemonic ?? '';
  } catch (err) {
    throw new Error(err.message);
  }
};

export default retrieveEntropy;
export { retrieveEntropy };
