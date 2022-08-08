import type { Account, AccountStatus } from '../../types/Account.d';
import type { AccountSecretsV2 } from '../../types/AccountSecrets.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import axiosFullService, { AxiosFullServiceResponse } from '../axiosFullService';
import { exportAccountSecretsV2 } from './exportAccountSecrets';

const GET_ACCOUNT_METHOD = 'get_account_status';

type GetAccountParams = {
  accountId: StringHex;
};

type GetAccountResult = {
  account: Account;
};

export function convertAccountV2(
  accountStatus: AccountStatus,
  accountSecrets: AccountSecretsV2
): GetAccountResult {
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
  const secrets = await exportAccountSecretsV2({ accountId });

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
    return convertAccountV2(result, secrets.accountSecrets);
  }
};

export default getAccount;
