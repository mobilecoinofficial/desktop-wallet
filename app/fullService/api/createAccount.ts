import type { Account, AccountFromV2Api } from '../../types/Account.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const CREATE_ACCOUNT_METHOD = 'create_account';

type CreateAccountParams = {
  name: string | null;
};

type CreateAccountResult = {
  account: Account;
};

const createAccount = async ({ name }: CreateAccountParams): Promise<CreateAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<{ account: AccountFromV2Api }> =
    await axiosFullService(CREATE_ACCOUNT_METHOD, {
      name,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  const accountId = result.account.id;

  const accountStatus = await getAccount({ accountId });

  return accountStatus;
};

export default createAccount;
