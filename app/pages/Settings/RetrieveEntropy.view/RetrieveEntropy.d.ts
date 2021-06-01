import type { RetrieveEntropyService } from '../../../services';

export interface RetrieveEntropyViewProps {
  retrieveEntropy: RetrieveEntropyService;
  onClickBack: () => void;
  accounts: { account: string; password: string }[];
}
