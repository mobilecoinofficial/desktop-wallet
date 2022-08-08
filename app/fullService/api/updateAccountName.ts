import type { Account, AccountFromV2Api } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const UPDATE_ACCOUNT_NAME = 'update_account_name';

type UpdateAccountNameParams = {
  accountId: StringHex;
  name: string;
};

type UpdateAccountNameResult = {
  account: Account;
};

type UpdateAccountNameResultV2 = {
  account: AccountFromV2Api;
};

const updateAccountName = async ({
  accountId,
  name,
}: UpdateAccountNameParams): Promise<UpdateAccountNameResult> => {
  const { result, error }: AxiosFullServiceResponse<UpdateAccountNameResultV2> =
    await axiosFullService(UPDATE_ACCOUNT_NAME, {
      accountId,
      name,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  return getAccount({ accountId });
};

export default updateAccountName;
