import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
import { validatePassword } from '../utils/authentication';
import { errorToString } from '../utils/errorHandler';

export const retrieveEntropy = async (password: string): Promise<string> => {
  try {
    const { encryptedPassword, selectedAccount } = store.getState();
    if (encryptedPassword === undefined) {
      throw new Error('encryptedPassword assertion failed');
    }

    // TODO - use secretKey returned here to pass to Full-Service to get secrets.
    await validatePassword(password, encryptedPassword);

    const { accountSecrets } = await fullServiceApi.exportAccountSecrets({
      accountId: selectedAccount.account.accountId,
    });

    return accountSecrets.entropy ?? accountSecrets.mnemonic ?? '';
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};

export type RetrieveEntropyService = typeof retrieveEntropy;
