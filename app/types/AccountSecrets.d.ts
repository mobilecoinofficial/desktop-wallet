// TODO - change to just Account; delete the other Account type
import type { StringHex } from './SpecialStrings';

type AccountKey = {
  object: 'account_key';
  // accountId: StringHex;
  fogAuthoritySpki: string;
  fogReportId: string;
  fogReportUrl: string;
  spendPrivateKey: StringHex;
  viewPrivateKey: StringHex;
};
export interface AccountSecrets {
  object: 'account_key';
  accountId: StringHex;
  entropy?: StringHex;
  mnemonic?: string;
  accountKey: AccountKey;
}
