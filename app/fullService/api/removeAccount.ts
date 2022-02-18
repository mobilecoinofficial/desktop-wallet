import { removeKeychainAccounts } from '../../utils/keytarService';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const REMOVE_ACCOUNT_METHOD = 'remove_account';

export type RemoveAccountParams = {
  accountId: string;
};

export type RemoveAccountResult = {
  removed: boolean;
};

const removeAccount = async ({ accountId }: RemoveAccountParams): Promise<RemoveAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<RemoveAccountResult> = await axiosFullService(
    REMOVE_ACCOUNT_METHOD,
    {
      accountId,
    }
  );
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    removeKeychainAccounts();
    return result as RemoveAccountResult;
  }
};

export default removeAccount;
