import type { SelectedAccount } from '../../../types/SelectedAccount.d';
import type { StringHex } from '../../../types/SpecialStrings';

export interface PaymentRequestProps {
  confirmation?: unknown;
  enqueueSnackbar: () => void;
  feePmob: string;
  onClickCancel: () => void;
  onClickConfirm: () => void;
  // onClickViewPaymentRequest: () => void;
  selectedAccount: SelectedAccount;
}
