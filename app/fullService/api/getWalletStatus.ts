import type { WalletStatus } from '../../types/WalletStatus.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_WALLET_STATUS_METHOD = 'get_wallet_status';

type GetWalletStatusResult = {
  walletStatus: WalletStatus;
};

const getWalletStatus = async (): Promise<GetWalletStatusResult> => {
  const { result, error }: AxiosFullServiceResponse<GetWalletStatusResult> = await axiosFullService(
    GET_WALLET_STATUS_METHOD
  );
  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as GetWalletStatusResult;
  }
};

export default getWalletStatus;
