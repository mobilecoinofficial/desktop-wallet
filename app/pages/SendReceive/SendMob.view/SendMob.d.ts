import Account from '../../../types/Account';
import Contact from '../../../types/Contact';

export interface SendMobProps {
  assignAddressForAccount: (a1: Record<string, unknown>) => void;
  buildTransaction: (a1: Record<string, unknown>) => void;
  contacts: Contact[];
  existingPin: string;
  isSyncedBuffered: (a0: bigint, a1: bigint) => boolean;
  pinThresholdPmob: number;
  selectedAccount: Account;
  submitTransaction: (a1: Record<string, unknown>) => void;
  updateContacts: () => void;
}
