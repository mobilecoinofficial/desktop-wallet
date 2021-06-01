export interface UserAccount {
  account: string;
  password: string;
}

export interface SavedPasswordsModalProps {
  accounts: UserAccount[];
  setFieldValue: (field: string, value: string) => void;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}
