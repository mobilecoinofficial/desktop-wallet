import type { ImportAccountService, ImportLegacyAccountService } from '../../../services';

export interface ImportAccountViewProps {
  importAccount: ImportAccountService;
  importLegacyAccount: ImportLegacyAccountService;
}
