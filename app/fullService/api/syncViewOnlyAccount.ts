import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const SYNC_VIEW_ONLY_ACCOUNT_METHOD = 'sync_view_only_account';

export type SyncViewOnlyAccountParams = {
  accountId: string;
  completedTxos?: [string, string][];
  nextSubaddressIndex?: string;
};

export type SyncViewOnlyAccountResult = boolean;

const getViewOnlyAccountSyncRequest = async ({
  accountId,
  completedTxos,
  nextSubaddressIndex,
}: SyncViewOnlyAccountParams): Promise<SyncViewOnlyAccountResult> => {
  const { error }: AxiosFullServiceResponse<unknown> = await axiosFullService(
    SYNC_VIEW_ONLY_ACCOUNT_METHOD,
    {
      accountId,
      completedTxos,
      nextSubaddressIndex,
    }
  );
  if (error) {
    throw new Error(error);
  }
  return true;
};

export default getViewOnlyAccountSyncRequest;
