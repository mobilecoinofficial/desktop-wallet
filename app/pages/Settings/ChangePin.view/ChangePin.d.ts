import type { StringUInt64 } from '../../../types/SpecialStrings.d';

export interface ChangePinViewProps {
  accounts: { account: string; password: string }[];
  onClickBack: () => void;
  onClickChangePin: (password: string, newPin: string, newThreshold: StringUInt64) => void;
  pin: string | undefined;
  pinThresholdPmob: StringUInt64;
}
