import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService from '../axiosFullService';

const GET_ACCOUNT_METHOD = 'get_account';

type GetAccountParams = {
  accountId: StringHex;
};

type GetAccountResult = {
  account: Account;
};

const getAccount = async ({ accountId }: GetAccountParams): Promise<GetAccountResult> => {
  const { result, error } = await axiosFullService(GET_ACCOUNT_METHOD, {
    accountId,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAccount;
