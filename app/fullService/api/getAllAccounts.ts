import type { Accounts } from '../../types/Account.d';
import axiosFullService from '../axiosFullService';

const GET_ALL_ACCOUNTS_METHOD = 'get_all_accounts';

type GetAllAccountsResult = Accounts;

const getAllAccounts = async (): Promise<GetAllAccountsResult> => {
  const { result, error } = await axiosFullService(GET_ALL_ACCOUNTS_METHOD);
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getAllAccounts;
