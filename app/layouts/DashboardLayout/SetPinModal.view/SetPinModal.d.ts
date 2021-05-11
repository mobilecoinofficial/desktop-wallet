import type { StringUInt64 } from '../../../types/SpecialStrings.d';

export interface SetPinModalProps {
  isShown: boolean;
  onPinSubmit: (pin: string, pinThreshold: StringUInt64) => void;
}
