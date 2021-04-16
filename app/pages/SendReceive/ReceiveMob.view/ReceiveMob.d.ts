import type Account from '../../../types/Account';
import type Contact from '../../../types/Contact';

export interface ReceiveMobProps {
  contacts: Contact[];
  selectedAccount: Account;
}
