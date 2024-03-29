import type { Contact } from '../../../types/Contact.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface ReceiveMobProps {
  onClickCode?: (code: string, text: string) => void;
  contacts: Contact[];
  selectedAccount: SelectedAccount;
}
