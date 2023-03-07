import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const RESYNC_ACCOUNT_METHOD = 'resync_account';

const resyncAccount = async (accountId: StringHex): Promise<void> => {
  const { error }: AxiosFullServiceResponse<null> = await axiosFullService(RESYNC_ACCOUNT_METHOD, {
    accountId,
  });

  if (error) {
    throw new Error(error);
  }
};

export default resyncAccount;
