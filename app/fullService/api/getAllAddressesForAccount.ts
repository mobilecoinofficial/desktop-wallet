import type Address from '../../types/Address';
import type { StringHex } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const GET_ALL_ADRESSES_FOR_ACCOUNT_METHOD = 'get_all_addresses_for_account';

type GetAllAddressesForAccountParams = {
  accountId: StringHex;
};

type GetAllAddressesForAccountResult = {
  addressIds: StringHex[];
  addressMap: { [addressId: string]: Address };
};

const getAllAddressesForAccount = async ({
  accountId,
}: GetAllAddressesForAccountParams): Promise<GetAllAddressesForAccountResult> => {
  const { result, error } = await axiosFullService(
    GET_ALL_ADRESSES_FOR_ACCOUNT_METHOD,
    {
      accountId,
    },
  );

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return {
      addressIds: result.publicAddresses,
      addressMap: result.addressMap,
    };
  }
};

export default getAllAddressesForAccount;
