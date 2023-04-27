import type { Account, AccountV2 } from '../../types/Account.d';
import { FogInfo } from '../../utils/fogConstants';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const CREATE_ACCOUNT_METHOD = 'create_account';

type CreateAccountParams = {
  name: string | null;
  fogInfo?: FogInfo;
};

type CreateAccountResult = {
  account: Account;
};

type CreateAccountResultV2 = {
  account: AccountV2;
};

const createAccount = async ({
  name,
  fogInfo,
}: CreateAccountParams): Promise<CreateAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<CreateAccountResultV2> = await axiosFullService(
    CREATE_ACCOUNT_METHOD,
    {
      fog_info: fogInfo ? { ...fogInfo } : undefined,
      name,
    }
  );

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
