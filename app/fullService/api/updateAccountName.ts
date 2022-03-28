import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const UPDATE_ACCOUNT_NAME = 'update_account_name';

type UpdateAccountNameParams = {
  accountId: StringHex;
  name: string;
};

type UpdateAccountNameResult = {
  account: Account;
};

export const updateAccountName = async ({
  accountId,
  name,
}: UpdateAccountNameParams): Promise<UpdateAccountNameResult> => {
  const { result, error }: AxiosFullServiceResponse<UpdateAccountNameResult> =
    await axiosFullService(UPDATE_ACCOUNT_NAME, {
      accountId,
      name,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
