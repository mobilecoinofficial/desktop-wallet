import type { Address, Addresses } from '../../types/Address.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ALL_ADDRESSES_FOR_ACCOUNT_METHOD = 'get_all_addresses_for_account';

type GetAllAddressesForAccountParams = {
  accountId: StringHex;
};

type GetAllAddressesForAccountResult = Addresses;

type GetAllAddressesForAccountResponse = {
  publicAddresses: string[];
  addressMap: { [addressId: string]: Address };
};

const getAllAddressesForAccount = async ({
  accountId,
}: GetAllAddressesForAccountParams): Promise<GetAllAddressesForAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<GetAllAddressesForAccountResponse> =
    await axiosFullService(GET_ALL_ADDRESSES_FOR_ACCOUNT_METHOD, {
      accountId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return {
      addressIds: (result as GetAllAddressesForAccountResponse).publicAddresses,
      addressMap: (result as GetAllAddressesForAccountResponse).addressMap,
    };
  }
};

export default getAllAddressesForAccount;
