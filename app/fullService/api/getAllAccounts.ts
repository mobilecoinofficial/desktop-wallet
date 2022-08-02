import type { Accounts, Account } from '../../types/Account.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import getAccount from './getAccount';

const GET_ALL_ACCOUNTS_METHOD = 'get_accounts';

type GetAllAccountsResult = Accounts;

const getAllAccounts = async (): Promise<GetAllAccountsResult> => {
  const { result, error }: AxiosFullServiceResponse<Accounts> = await axiosFullService(
    GET_ALL_ACCOUNTS_METHOD,
    {}
  );
  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  }

  const processedAccounts: { [accountId: string]: Account } = {};

  await Promise.all(
    Object.values(result.accountIds).map(async (accountId: string) => {
      const processedAccount = await getAccount({ accountId });
      processedAccounts[accountId] = processedAccount.account;
    })
  );

  return {
    accountIds: result.accountIds,
    accountMap: processedAccounts,
  };
};

export default getAllAccounts;
