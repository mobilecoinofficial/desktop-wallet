import { removeKeychainAccounts } from '../../utils/keytarService';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const REMOVE_ACCOUNT_METHOD = 'remove_account';

export type RemoveAccountParams = {
  accountId: string;
};

export type RemoveAccountResult = {
  removed: boolean;
};

export const removeAccount = async ({
  accountId,
}: RemoveAccountParams): Promise<RemoveAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<RemoveAccountResult> = await axiosFullService(
    REMOVE_ACCOUNT_METHOD,
    {
      accountId,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    removeKeychainAccounts();
    return result;
  }
};
