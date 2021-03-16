import type Account from '../../types/Account';
import type { StringHex } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const GET_ACCOUNT_STATUS_METHOD = 'get_account_status';

type GetAccountStatusParams = {
  accountId: StringHex;
};

type GetAccountStatusResult = {
  account: Account;
};

const getAccountStatus = async ({
  accountId,
}: GetAccountStatusParams): Promise<GetAccountStatusResult> => {
  const { result, error } = await axiosFullService(GET_ACCOUNT_STATUS_METHOD, {
    accountId,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAccountStatus;
