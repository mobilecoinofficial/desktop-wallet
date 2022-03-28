import type { WalletStatus } from '../../types/WalletStatus.d';
import { axiosFullService, AxiosFullServiceResponse } from '../axiosFullService';

const GET_WALLET_STATUS_METHOD = 'get_wallet_status';

type GetWalletStatusResult = {
  walletStatus: WalletStatus;
};

export const getWalletStatus = async (): Promise<GetWalletStatusResult> => {
  const { result, error }: AxiosFullServiceResponse<GetWalletStatusResult> = await axiosFullService(
    GET_WALLET_STATUS_METHOD
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};
