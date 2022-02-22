import type { AccountSecrets } from '../../types/AccountSecrets.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const EXPORT_ACCOUNT_SECRETS_METHOD = 'export_account_secrets';

type ExportAccountSecretsParams = {
  accountId: StringHex;
};

type ExportAccountSecretsResult = {
  accountSecrets: AccountSecrets;
};

const exportAccountSecrets = async ({
  accountId,
}: ExportAccountSecretsParams): Promise<ExportAccountSecretsResult> => {
  const { result, error }: AxiosFullServiceResponse<ExportAccountSecretsResult> =
    await axiosFullService(EXPORT_ACCOUNT_SECRETS_METHOD, {
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

export default exportAccountSecrets;
