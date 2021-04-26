import Contact from '../../../types/Contact';
import SelectedAccount from '../../../types/SelectedAccount';

export interface SendMobProps {
  assignAddressForAccount: (a1: Record<string, unknown>) => void;
  buildTransaction: (a1: Record<string, unknown>) => void;
  contacts: Contact[];
  existingPin: string;
  isSyncedBuffered: (a0: bigint, a1: bigint) => boolean;
  pinThresholdPmob: number;
  selectedAccount: SelectedAccount;
  submitTransaction: (a1: Record<string, unknown>) => void;
  updateContacts: () => void;
}
