import type Address from '../../types/Address';
import type { StringHex } from '../../types/SpecialStrings';
import axiosFullService from '../axiosFullService';

const CREATE_ADDRESS_METHOD = 'create_address';

type CreateAddressParams = {
  accountId: StringHex;
  comment?: string;
};

type CreateAddressResult = {
  address: Address;
};

const createAddress = async ({
  accountId,
  comment,
}: CreateAddressParams): Promise<CreateAddressResult> => {
  const { result, error } = await axiosFullService(CREATE_ADDRESS_METHOD, {
    accountId,
    comment,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    const errorMessage = error === 'Database(PasswordFailed)' ? 'Incorrect Password' : error;
    throw new Error(errorMessage);
  } else {
    return result;
  }
};

export default createAddress;
