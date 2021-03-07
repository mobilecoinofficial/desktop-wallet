import type WalletStatus from '../../types/WalletStatus';
import axiosFullService from '../axiosFullService';

const GET_WALLET_STATUS_METHOD = 'get_wallet_status';

type GetWalletStatusResult = {
  walletStatus: WalletStatus
};

const getWalletStatus = async (): Promise<GetWalletStatusResult> => {
  const { result, error } = await axiosFullService(GET_WALLET_STATUS_METHOD);
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getWalletStatus;
