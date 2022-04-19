import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
import { validatePassphrase } from '../utils/authentication';
import { errorToString } from '../utils/errorHandler';

const retrieveEntropy = async (password: string): Promise<string> => {
  try {
    const { encryptedPassword, selectedAccount } = store.getState();
    if (encryptedPassword === undefined) {
      throw new Error('encryptedPassword assertion failed');
    }

    // TODO - use secretKey returned here to pass to Full-Service to get secrets.
    await validatePassphrase(password, encryptedPassword);

    const { accountSecrets } = await fullServiceApi.exportAccountSecrets({
      accountId: selectedAccount.account.accountId,
    });

    return accountSecrets.entropy ?? accountSecrets.mnemonic ?? '';
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};

export default retrieveEntropy;
export { retrieveEntropy };
export type RetrieveEntropyService = typeof retrieveEntropy;
