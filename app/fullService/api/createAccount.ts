import type { Account } from '../../types/Account.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const CREATE_ACCOUNT_METHOD = 'create_account';

type CreateAccountParams = {
  firstBlockIndex?: string;
  name: string | null;
};

type CreateAccountResult = {
  account: Account;
};

export const createAccount = async ({
  firstBlockIndex,
  name,
}: CreateAccountParams): Promise<CreateAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<CreateAccountResult> = await axiosFullService(
    CREATE_ACCOUNT_METHOD,
    {
      firstBlockIndex,
      name,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
