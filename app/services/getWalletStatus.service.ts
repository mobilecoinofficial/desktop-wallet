import * as fullServiceApi from '../fullService/api';
import { WalletStatus } from '../types';

export const getWalletStatus = async (): Promise<WalletStatus> => {
  try {
    return await fullServiceApi.getWalletStatus().then((x) => x.walletStatus);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type GetWalletStatusService = typeof getWalletStatus;
