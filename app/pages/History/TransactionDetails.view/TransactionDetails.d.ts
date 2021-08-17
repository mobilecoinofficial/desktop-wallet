import type { TransactionLog } from '../../../types/TransactionLog.d';
import type { Txos } from '../../../types/Txo.d';

export interface TransactionDetailsViewProps {
  onClickCopyConfirmations: () => void;
  onChangedComment: (transactionLogId: string, comment: string) => void;
  onClickBack: () => void;
  transactionLog: TransactionLog;
  txos: Txos;
}
