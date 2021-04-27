import type TransactionLog from '../../../types/TransactionLog';

export interface TransactionDetailsViewProps {
  comment: string; // this should be from metadata
  onChangedComment: (transactionLogId: string, comment: string) => void;
  onClickBack: () => void;
  transactionLog: TransactionLog;
}
