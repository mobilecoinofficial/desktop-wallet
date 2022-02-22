import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ACCOUNT_METHOD = 'get_account';

type GetAccountParams = {
  accountId: StringHex;
};

type GetAccountResult = {
  account: Account;
};

const getAccount = async ({ accountId }: GetAccountParams): Promise<GetAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAccountResult> = await axiosFullService(
    GET_ACCOUNT_METHOD,
    {
      accountId,
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

export default getAccount;
