import type { Account } from '../../types/Account.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const CREATE_ACCOUNT_METHOD = 'create_account';

type CreateAccountParams = {
  firstBlockIndex?: string;
  name: string | null;
};

type CreateAccountResult = {
  account: Account;
};

const createAccount = async ({
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
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as CreateAccountResult;
  }
};

export default createAccount;
