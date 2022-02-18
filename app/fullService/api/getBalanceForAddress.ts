import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_BALANCE_FOR_ADDRESS_METHOD = 'get_balance_for_address';

type GetBalanceParams = {
  accountId: StringHex;
};

type GetBalanceResult = {
  balance: BalanceStatus; // TODO - lock in name of object
};

const getBalance = async ({ accountId }: GetBalanceParams): Promise<GetBalanceResult> => {
  const { result, error }: AxiosFullServiceResponse<GetBalanceResult> = await axiosFullService(
    GET_BALANCE_FOR_ADDRESS_METHOD,
    {
      accountId,
    }
  );
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as GetBalanceResult;
  }
};

export default getBalance;
