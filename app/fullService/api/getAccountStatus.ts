import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const GET_ACCOUNT_STATUS_METHOD = 'get_account_status';

type GetAccountStatusParams = {
  accountId: StringHex;
};

type GetAccountStatusResult = {
  account: Account;
};

export const getAccountStatus = async ({
  accountId,
}: GetAccountStatusParams): Promise<GetAccountStatusResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAccountStatusResult> =
    await axiosFullService(GET_ACCOUNT_STATUS_METHOD, {
      accountId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
