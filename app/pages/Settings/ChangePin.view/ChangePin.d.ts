import type { StringUInt64 } from '../../../types/SpecialStrings.d';

export interface ChangePinViewProps {
  pinThresholdPmob: StringUInt64;
  pin: string | undefined;
  setPin: (pin: string, pinThresholdPmob: StringUInt64, passphrase?: string) => Promise<void>;
  onClickBack: () => void;
  accounts: { account: string; password: string }[];
}
