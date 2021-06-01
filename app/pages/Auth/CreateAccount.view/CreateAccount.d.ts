import type { CreateAccountService } from '../../../services';

export interface CreateAccountViewProps {
  createAccount: CreateAccountService;
  setKeychainAccount: (account: string, password: string) => void;
}
