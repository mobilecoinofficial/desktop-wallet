import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_VIEW_ONLY_ACCOUNT_SYNC_REQUEST_METHOD = 'create_view_only_account_sync_request';

export type GetViewOnlyAccountImportSyncParams = {
  accountId: string;
};

export type GetViewOnlyAccountSyncRequestResult = {
  accountId: string;
  incompleteTxosEncoded: string[];
};

const getViewOnlyAccountSyncRequest = async ({
  accountId,
}: GetViewOnlyAccountImportSyncParams): Promise<GetViewOnlyAccountSyncRequestResult> => {
  const { result, error }: AxiosFullServiceResponse<GetViewOnlyAccountSyncRequestResult> =
    await axiosFullService(GET_VIEW_ONLY_ACCOUNT_SYNC_REQUEST_METHOD, {
      accountId,
    });

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return result;
  }
};

export default getViewOnlyAccountSyncRequest;
