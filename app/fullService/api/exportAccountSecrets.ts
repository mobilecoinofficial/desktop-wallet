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
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result as ExportAccountSecretsResult;
  }
};

export default exportAccountSecrets;
