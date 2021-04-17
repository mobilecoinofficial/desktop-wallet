import Account from '../../../types/Account';
import Contact from '../../../types/Contact';

export interface SendMobProps {
  assignAddressForAccount: () => void;
  buildTransaction: () => void;
  contacts: Contact[];
  existingPin: string;
  isSyncedBuffered: (a0: bigint, a1: bigint) => boolean;
  pinThresholdPmob: number;
  selectedAccount: Account;
  submitTransaction: () => void;
  updateContacts: () => void;
}
