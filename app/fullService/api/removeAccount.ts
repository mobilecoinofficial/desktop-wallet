import axiosFullService from '../axiosFullService';

const REMOVE_ACCOUNT_METHOD = 'remove_account';

export type RemoveAccountParams = {
  accountId: string;
};

export type RemoveAccountResult = {
  removed: boolean;
};

const removeAccount = async ({ accountId }: RemoveAccountParams): Promise<RemoveAccountResult> => {
  const { result, error } = await axiosFullService(REMOVE_ACCOUNT_METHOD, {
    accountId,
  });
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default removeAccount;
