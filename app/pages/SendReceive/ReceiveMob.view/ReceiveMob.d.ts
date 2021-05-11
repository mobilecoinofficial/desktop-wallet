import type { Contact } from '../../../types/Contact.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ReceiveMobProps {
  contacts: Contact[];
  selectedAccount: SelectedAccount;
}
