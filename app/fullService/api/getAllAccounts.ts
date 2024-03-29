import type { Accounts, Account, AccountsV2 } from '../../types/Account.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { convertAccountV2 } from './getAccount';

const GET_ALL_ACCOUNTS_METHOD = 'get_accounts';

type GetAllAccountsResult = Accounts;

export const getAllAccountsV2 = async (): Promise<AccountsV2> => {
  const { result, error }: AxiosFullServiceResponse<AccountsV2> = await axiosFullService(
    GET_ALL_ACCOUNTS_METHOD,
    {}
  );
  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

const getAllAccounts = async (): Promise<GetAllAccountsResult> => {
  const result = await getAllAccountsV2();

  const processedAccounts = result.accountIds.reduce(
    (accum: { [accountId: string]: Account }, id) => ({
      ...accum,
      [id]: convertAccountV2(result.accountMap[id]),
    }),
    {}
  );

  return {
    accountIds: result.accountIds,
    accountMap: processedAccounts,
  };
};

export default getAllAccounts;
