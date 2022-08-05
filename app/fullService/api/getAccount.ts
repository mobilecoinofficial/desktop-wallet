import type { Account, AccountStatus } from '../../types/Account.d';
import type { AccountSecretsFromV2Api } from '../../types/AccountSecrets.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';

const GET_ACCOUNT_METHOD = 'get_account_status';

type GetAccountParams = {
  accountId: StringHex;
};

type GetAccountResult = {
  account: Account;
};

export function convertAccountFromV2Api(
  accountStatus: AccountStatus,
  accountSecrets: AccountSecretsFromV2Api
): GetAccountResult {
  console.log(accountSecrets);
  return {
    account: {
      accountHeight: accountStatus.account.nextBlockIndex,
      accountId: accountStatus.account.id,
      accountKey: accountSecrets.accountKey,
      entropy: accountSecrets.entropy,
      firstBlockIndex: accountStatus.account.firstBlockIndex,
      keyDerivationVersion: accountSecrets.keyDerivationVersion,
      mainAddress: accountStatus.account.mainAddress,
      name: accountStatus.account.name,
      nextSubaddressIndex: accountStatus.account.nextSubaddressIndex,
      object: 'account',
      recoveryMode: accountStatus.account.recoveryMode,
    },
  };
}

const getAccount = async ({ accountId }: GetAccountParams): Promise<GetAccountResult> => {
  // not using exportAccountSecrets fn here because we need the v2 secrets
  // todo wrap this in a fn instead of copy paste
  const {
    result: secretsResult,
    error: secretsError,
  }: AxiosFullServiceResponse<{ accountSecrets: AccountSecretsFromV2Api }> = await axiosFullService(
    'export_account_secrets',
    {
      accountId,
    }
  );

  if (secretsError) {
    throw new Error(secretsError);
  } else if (!secretsResult) {
    throw new Error('Failure to retrieve data.');
  }

  const { result, error }: AxiosFullServiceResponse<AccountStatus> = await axiosFullService(
    GET_ACCOUNT_METHOD,
    {
      accountId,
    }
  );

  if (error) {
    throw new Error(error);
  } else if (!result) {
    throw new Error('Failure to retrieve data.');
  } else {
    return convertAccountFromV2Api(result, secretsResult.accountSecrets);
  }
};

export default getAccount;
