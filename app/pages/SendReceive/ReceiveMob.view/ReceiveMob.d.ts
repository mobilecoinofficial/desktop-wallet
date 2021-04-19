import type Contact from '../../../types/Contact';

export interface ReceiveMobProps {
  contacts: Contact[];
  selectedAccount: {
    account: {
      accountId: string;
      firstBlockIndex: string;
      keyDerivationVersion: string;
      mainAddress: string;
      name: string;
      nextSubaddressIndex: string;
      object: string; // "account"
      recoveryMode: boolean;
    };
    balanceStatus: {
      accountBlockIndex: string;
      isSynced: boolean;
      localBlockIndex: string;
      networkBlockIndex: string;
      object: string; // "balance"
      orphanedPmob: string;
      pendingPmob: string;
      secretedPmob: string;
      spentPmob: string;
      unspentPmob: string;
    };
  };
}
