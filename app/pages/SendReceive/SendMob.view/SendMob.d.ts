import type { Contact } from '../../../types/Contact.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';
import { StringHex } from '../../../types/SpecialStrings';

export interface SendMobProps {
  assignAddressForAccount: (a1: StringHex) => void;
  buildTransaction: (a1: Record<string, unknown>) => void;
  contacts: Contact[];
  existingPin: string;
  isSyncedBuffered: (a0: bigint, a1: bigint) => boolean;
  pinThresholdPmob: number;
  selectedAccount: SelectedAccount;
  submitTransaction: (a1: Record<string, unknown>) => void;
  updateContacts: () => void;
}
