import type { Account } from '../../types/Account.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService from '../axiosFullService';

const UPDATE_ACCOUNT_NAME = 'update_account_name';

type UpdateAccountNameParams = {
  accountId: StringHex;
  name: string;
};

type UpdateAccountNameResult = {
  account: Account;
};

const updateAccountName = async ({
  accountId,
  name,
}: UpdateAccountNameParams): Promise<UpdateAccountNameResult> => {
  const { result, error } = await axiosFullService(UPDATE_ACCOUNT_NAME, {
    accountId,
    name,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default updateAccountName;
