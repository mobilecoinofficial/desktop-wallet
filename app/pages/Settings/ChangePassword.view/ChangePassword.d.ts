import type { ChangePasswordService } from '../../../services';

export interface ChangePasswordViewProps {
  accounts: { account: string; password: string }[];
  changePassword: ChangePasswordService;
  onClickBack: () => void;
  setKeychainAccount: (account: string, password: string) => void;
}
