import * as fullServiceApi from '../fullService/api';
import { WalletStatus } from '../types';
import { errorToString } from '../utils/errorHandler';

export const getWalletStatus = async (): Promise<WalletStatus> => {
  try {
    return await fullServiceApi.getWalletStatus().then((x) => x.walletStatus);
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};

export type GetWalletStatusService = typeof getWalletStatus;
