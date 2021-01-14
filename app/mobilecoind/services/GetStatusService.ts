// import * as mobileCoinDAPI from '../protos/mobilecoind_api_pb';
import { getMonitorStatus, getNetworkStatus } from '../api';
import BaseService from './BaseService';

interface GetStatusServiceArgs {
  monitorId: Uint8Array | string;
}

// For now, we have one account. So the nextBlock status is universal.
// For multiple accounts, we will want to track syncing w.r.t. each monitor
// So one monitor my be sync while another is still loading.
class GetStatusService extends BaseService<GetStatusServiceArgs> {
  async call() {
    try {
      const { monitorId } = this.argsObj;
      const GetMonitorStatusResponse = await getMonitorStatus(this.client, {
        monitorId,
      });
      const GetNetworkStatusResponse = await getNetworkStatus(this.client);
      const status = GetMonitorStatusResponse.getStatus();
      if (status === undefined) {
        throw new Error(
          'TODO - have a better error for when status is undefined',
        );
      }

      const localBlockIndex = GetNetworkStatusResponse.getLocalBlockIndex();
      const nextBlock = status.getNextBlock();
      const networkHighestBlockIndex = GetNetworkStatusResponse.getNetworkHighestBlockIndex();
      return this.handleSuccess({
        localBlockIndex,
        networkHighestBlockIndex,
        nextBlock,
      });
    } catch (err) {
      return this.handleError(err);
    }
  }
}

export default GetStatusService;
