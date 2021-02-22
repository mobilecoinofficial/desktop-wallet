import type BalanceStatus from '../../types/BalanceStatus';
import type { StringHex } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const GET_BALANCE_METHOD = 'get_balance';

type GetBalanceParams = {
  accountId: StringHex;
};

type GetBalanceResult = {
  status: BalanceStatus;
};

const getBalance = async ({
  accountId,
}: GetBalanceParams): Promise<GetBalanceResult> => {
  const { result, error } = await axiosFullService(
    GET_BALANCE_METHOD,
    {
      account_id: accountId,
    },
  );

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getBalance;
