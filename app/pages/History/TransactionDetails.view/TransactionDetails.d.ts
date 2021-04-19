import type TransactionLog from '../../../types/TransactionLog';
import type { Txos } from '../../../types/Txo';

export interface TransactionDetailsViewProps {
  comment: string; // this should be from metadata
  onChangedComment: (transactionLogId: string, comment: string) => void;
  onClickBack: () => void;
  transactionLog: TransactionLog;
  txos: Txos;
}
