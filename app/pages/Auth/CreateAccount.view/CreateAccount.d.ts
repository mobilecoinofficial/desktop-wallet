import type { FullServiceContextValue } from '../../../contexts/FullServiceContext';

export interface CreateAccountViewProps {
  createAccount: FullServiceContextValue['createAccount'];
  setKeychainAccount: (account: string, password: string) => void;
}
