import { UpdatePinService } from '../../../redux/services/updatePin';
import type { StringHex } from '../../../types/SpecialStrings.d';

type PendingSecrets = {
  entropy: StringHex;
  mnemonic: string;
};

export interface OnboardingModalProps {
  confirmEntropyKnown: () => Promise<void>;
  isEntropyKnown: boolean;
  isPinRequired: boolean;
  pendingSecrets: PendingSecrets | null;
  updatePin: UpdatePinService;
}
