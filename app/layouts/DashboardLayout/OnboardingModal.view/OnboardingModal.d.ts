import { StringHex, StringUInt64 } from '../../../types/SpecialStrings';

type PendingSecrets = {
  entropy: StringHex;
  mnemonic: string;
};

export interface OnboardingModalProps {
  confirmEntropyKnown: () => void;
  isEntropyKnown: boolean;
  isPinRequired: boolean;
  pendingSecrets: PendingSecrets | null;
  setPin: (pin: string, pinThresholdPmob: StringUInt64, passphrase?: string) => Promise<void>;
}
