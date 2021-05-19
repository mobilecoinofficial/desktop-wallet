import type {
  AssignAddressForAccountService,
  BuildTransactionService,
  SubmitTransactionService,
} from '../../../services';
import type { Contact } from '../../../types/Contact.d';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface SendMobProps {
  assignAddressForAccount: AssignAddressForAccountService;
  buildTransaction: BuildTransactionService;
  contacts: Contact[];
  existingPin: string;
  isSyncedBuffered: (a0: bigint, a1: bigint) => boolean;
  pinThresholdPmob: number;
  selectedAccount: SelectedAccount;
  submitTransaction: SubmitTransactionService;
  updateContacts: () => void;
}
