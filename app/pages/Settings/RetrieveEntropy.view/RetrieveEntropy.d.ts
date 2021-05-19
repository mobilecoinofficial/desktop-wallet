import type { RetrieveEntropyService } from '../../../services';

export interface RetrieveEntropyViewProps {
  retrieveEntropy: RetrieveEntropyService;
  onClickBack: () => void;
}
