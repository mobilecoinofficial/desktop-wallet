import type { ConfirmEntropyKnownService, SetPinService } from '../../../services';
import type { StringHex } from '../../../types/SpecialStrings.d';

type PendingSecrets = {
  entropy: StringHex;
  mnemonic: string;
};

export interface OnboardingModalProps {
  confirmEntropyKnown: ConfirmEntropyKnownService;
  isEntropyKnown: boolean;
  isPinRequired: boolean;
  pendingSecrets: PendingSecrets | null;
  setPin: SetPinService;
}
