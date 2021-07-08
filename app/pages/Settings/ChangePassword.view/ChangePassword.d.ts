export interface ChangePasswordViewProps {
  accounts: { account: string; password: string }[];
  onClickBack: () => void;
  onClickChangePassword: (oldPassword: string, newPassword: string, saveChecked: boolean) => void;
}
