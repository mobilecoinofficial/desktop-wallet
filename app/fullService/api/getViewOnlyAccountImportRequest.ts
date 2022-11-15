import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_VIEW_ONLY_ACCOUNT_IMPORT_REQUEST_METHOD = 'create_view_only_account_import_request';

export type GetViewOnlyAccountImportRequestParams = {
  accountId: string;
};

export type GetViewOnlyAccountImportRequestResult = {
  json_rpc_request: {
    method: 'import_view_only_account';
    params: {
      view_private_key: string;
      spend_public_key: string;
      name?: string;
      first_block_index: string;
      next_subaddress_index: string;
    };
    jsonrpc: '2.0';
    id: 1;
  };
};

const getViewOnlyAccountImportRequest = async ({
  accountId,
}: GetViewOnlyAccountImportRequestParams): Promise<GetViewOnlyAccountImportRequestResult> => {
  const { result, error }: AxiosFullServiceResponse<GetViewOnlyAccountImportRequestResult> =
    await axiosFullService(GET_VIEW_ONLY_ACCOUNT_IMPORT_REQUEST_METHOD, {
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

export default getViewOnlyAccountImportRequest;
