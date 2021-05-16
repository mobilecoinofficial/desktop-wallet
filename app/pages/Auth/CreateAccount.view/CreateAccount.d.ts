import type { FullServiceContextValue } from '../../../contexts/FullServiceContext';

export interface CreateAccountViewProps {
  createAccount: FullServiceContextValue['createAccount'];
  setPassword: (accountName: string, password: string) => void;
}
