import type FullServiceAccount from '../../types/FullServiceAccount';
import axiosFullService from '../axiosFullService';

const CREATE_ACCOUNT_METHOD = 'create_account';

type CreateAccountParams = {
  firstBlock?: string,
  name: string | null,
};

type CreateAccountResult = {
  account: FullServiceAccount;
};

const createAccount = async ({
  firstBlock = '0',
  name,
}: CreateAccountParams): Promise<CreateAccountResult> => {
  const { result, error } = await axiosFullService(CREATE_ACCOUNT_METHOD, {
    firstBlock,
    name,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default createAccount;