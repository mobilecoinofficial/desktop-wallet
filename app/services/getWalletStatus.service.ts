import * as fullServiceApi from '../fullService/api';
import type { WalletStatus } from '../types/WalletStatus.d';

const getWalletStatus = async (): Promise<WalletStatus> =>
  fullServiceApi.getWalletStatus().then((x) => x.walletStatus);

export default getWalletStatus;
export { getWalletStatus };
export type GetWalletStatusService = typeof getWalletStatus;
