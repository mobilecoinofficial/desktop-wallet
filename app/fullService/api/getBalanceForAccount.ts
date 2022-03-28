import { BalanceStatus, StringHex } from '../../types';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_BALANCE_FOR_ACCOUNT_METHOD = 'get_balance_for_account';

type GetBalanceParams = {
  accountId: StringHex;
};

type GetBalanceResult = {
  balance: BalanceStatus; // TODO - lock in name of object
};

const getBalance = async ({ accountId }: GetBalanceParams): Promise<GetBalanceResult> => {
  const { result, error }: AxiosFullServiceResponse<GetBalanceResult> = await axiosFullService(
    GET_BALANCE_FOR_ACCOUNT_METHOD,
    {
      accountId,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

export default getBalance;
