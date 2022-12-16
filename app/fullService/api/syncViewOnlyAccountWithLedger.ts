import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const SYNC_VIEW_ONLY_ACCOUNT_METHOD = 'sync_view_only_account';

export type SyncViewOnlyAccountWithLedgerParams = {
  accountId: string;
  completedTxos: [string, string][];
  nextSubaddressIndex: string;
};

export type SyncViewOnlyAccountWithLedgerResult = boolean;

const getSyncViewOnlyAccountWithLedgerRequest = async ({
  accountId,
}: SyncViewOnlyAccountWithLedgerParams): Promise<SyncViewOnlyAccountWithLedgerResult> => {
  const { error }: AxiosFullServiceResponse<unknown> = await axiosFullService(
    SYNC_VIEW_ONLY_ACCOUNT_METHOD,
    {
      accountId,
    }
  );
  if (error) {
    throw new Error(error);
  }
  return true;
};

export default getSyncViewOnlyAccountWithLedgerRequest;
