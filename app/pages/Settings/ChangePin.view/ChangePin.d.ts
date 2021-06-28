import type { SetPinService } from '../../../services';
import type { StringUInt64 } from '../../../types/SpecialStrings.d';

export interface ChangePinViewProps {
  pinThresholdPmob: StringUInt64;
  pin: string | undefined;
  setPin: SetPinService;
  onClickBack: () => void;
  accounts: { account: string; password: string }[];
}
