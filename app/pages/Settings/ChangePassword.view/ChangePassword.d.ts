export interface ChangePasswordViewProps {
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  onClickBack: () => void;
}
