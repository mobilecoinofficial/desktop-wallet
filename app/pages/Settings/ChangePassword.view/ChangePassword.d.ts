import type { ChangePasswordService } from '../../../services';

export interface ChangePasswordViewProps {
  changePassword: ChangePasswordService;
  onClickBack: () => void;
}
