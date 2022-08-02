import type { StringHex, StringUInt64 } from './SpecialStrings';

export type AccountKey = {
  // accountId: StringHex;
  fogAuthoritySpki: string;
  fogReportId: string;
  fogReportUrl: string;
  spendPrivateKey: StringHex;
  viewPrivateKey: StringHex;
};
export interface AccountSecrets {
  accountId: StringHex;
  entropy?: StringHex;
  mnemonic?: string;
  accountKey: AccountKey;
}

export interface ViewAccountKey {
  // String representing the object's type. Objects of the same type share
  // the same value.
  object: 'view_account_key'; // FIX-ME this field should be removed at the full service level.
  //  Private key used for view-key matching, hex-encoded Ristretto bytes.
  view_private_key: StringHex;
  // Public key, hex-encoded Ristretto bytes.
  spend_public_key: StringHex;
}

export interface AccountSecretsFromV2Api {
  // The account ID for this account key in the wallet database.
  account_id: StringHex;
  // The name of this account
  name: string;
  // The entropy from which this account key was derived, as a String
  // (version 1)
  entropy?: string;
  // The mnemonic from which this account key was derived, as a String
  // (version 2)
  mnemonic?: string;
  // The key derivation version that this mnemonic goes with
  keyDerivationVersion: StringUInt64;
  //  Private keys for receiving and spending MobileCoin.
  accountKey?: AccountKey;
  //  Private keys for receiving and spending MobileCoin.
  viewAccountKey?: ViewAccountKey;
}
