import type { AccountSecrets, AccountSecretsV2 } from '../../types/AccountSecrets.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const EXPORT_ACCOUNT_SECRETS_METHOD = 'export_account_secrets';

type ExportAccountSecretsParams = {
  accountId: StringHex;
};

type ExportAccountSecretsResult = {
  accountSecrets: AccountSecrets;
};

type ExportAccountSecretsV2Result = {
  accountSecrets: AccountSecretsV2;
};

function convertAccountSecrets(secrets: AccountSecretsV2): ExportAccountSecretsResult {
  return {
    accountSecrets: {
      accountId: secrets.accountId,
      accountKey: secrets.accountKey,
      entropy: secrets.entropy,
      mnemonic: secrets.mnemonic,
    },
  };
}

export const exportAccountSecretsV2 = async ({
  accountId,
}: ExportAccountSecretsParams): Promise<ExportAccountSecretsV2Result> => {
  const { result, error }: AxiosFullServiceResponse<ExportAccountSecretsV2Result> =
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

const exportAccountSecrets = async ({
  accountId,
}: ExportAccountSecretsParams): Promise<ExportAccountSecretsResult> => {
  const v2secrets = await exportAccountSecretsV2({ accountId });

  return convertAccountSecrets(v2secrets.accountSecrets);
};

export default exportAccountSecrets;
