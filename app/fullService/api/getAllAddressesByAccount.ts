import type Address from '../../types/Address';
import type { StringHex } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const GET_ALL_ADRESSES_BY_ACCOUNT_METHOD = 'get_all_addresses_by_account';

type GetAllAddressesByAccountParams = {
  accountId: StringHex;
};

type GetAllAddressesByAccountResult = {
  address_ids: StringHex[];
  address_map: { [address_id: string]: Address };
};

const getAllAddressesByAccount = async ({
  accountId,
}: GetAllAddressesByAccountParams): Promise<GetAllAddressesByAccountResult> => {
  const { result, error } = await axiosFullService(
    GET_ALL_ADRESSES_BY_ACCOUNT_METHOD,
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

export default getAllAddressesByAccount;
