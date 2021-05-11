import { StringUInt64 } from '../../../types/SpecialStrings';

export interface SetPinModalProps {
  isShown: boolean;
  onPinSubmit: (pin: string, pinThreshold: StringUInt64) => void;
}
