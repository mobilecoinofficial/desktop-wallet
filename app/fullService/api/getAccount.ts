import type FullServiceAccount from '../../types/FullServiceAccount';
import type { StringHex } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const GET_ACCOUNT_METHOD = 'get_account';

type GetAccountParams = {
  accountId: StringHex;
};

type GetAccountResult = {
  account: FullServiceAccount;
};

const getAccount = async ({
  accountId,
}: GetAccountParams): Promise<GetAccountResult> => {
  const { result, error } = await axiosFullService(GET_ACCOUNT_METHOD, {
    account_id: accountId,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAccount;
