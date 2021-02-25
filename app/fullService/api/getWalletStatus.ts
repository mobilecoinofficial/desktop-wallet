import camelCaseKeys from 'camelcase-keys';

import type WalletStatus from '../../types/WalletStatus';
import axiosFullService from '../axiosFullService';

const GET_WALLET_STATUS_METHOD = 'get_wallet_status';

type GetWalletStatusResult = {
  status: WalletStatus
};

const getWalletStatus = async (): Promise<GetWalletStatusResult> => {
  const { result, error } = await axiosFullService(GET_WALLET_STATUS_METHOD);

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return camelCaseKeys(result, { deep: true });
  }
};

export default getWalletStatus;
