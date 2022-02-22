import type { Address } from '../../types/Address.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const ASSIGN_ADDRESS_FOR_ACCOUNT_METHOD = 'assign_address_for_account';

type AssignAddressForAccountParams = {
  accountId: StringHex;
  metadata?: string;
};

export type AssignAddressForAccountResult = {
  address: Address;
};

const assignAddressForAccount = async ({
  accountId,
  metadata,
}: AssignAddressForAccountParams): Promise<AssignAddressForAccountResult> => {
  const { result, error }: AxiosFullServiceResponse<AssignAddressForAccountResult> =
    await axiosFullService(ASSIGN_ADDRESS_FOR_ACCOUNT_METHOD, {
      accountId,
      metadata,
    });

  if (error) {
    // TODO - I'll write up a better error handler
    const errorMessage = error === 'Database(PasswordFailed)' ? 'Incorrect Password' : error;
    throw new Error(errorMessage);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

export default assignAddressForAccount;
