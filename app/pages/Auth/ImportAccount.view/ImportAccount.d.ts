import type { FullServiceContextValue } from '../../../contexts/FullServiceContext';

export interface ImportAccountViewProps {
  importAccount: FullServiceContextValue['importAccount'];
  importLegacyAccount: FullServiceContextValue['importLegacyAccount'];
  setKeychainAccount: (account: string, password: string) => void;
}
