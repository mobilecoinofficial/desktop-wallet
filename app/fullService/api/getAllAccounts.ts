import type { Accounts } from '../../types/Account.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const GET_ALL_ACCOUNTS_METHOD = 'get_all_accounts';

type GetAllAccountsResult = Accounts;

export const getAllAccounts = async (): Promise<GetAllAccountsResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAllAccountsResult> = await axiosFullService(
    GET_ALL_ACCOUNTS_METHOD
  );
  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
