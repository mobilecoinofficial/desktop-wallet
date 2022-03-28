import type { TransactionLog } from '../../../types/TransactionLog.d';

export interface TransactionDetailsViewProps {
  onClickCopyConfirmations: () => void;
  onChangedComment: (transactionLogId: string, comment: string) => void;
  onClickBack: () => void;
  onClickValidateConfirmations: () => void;
  transactionLog: TransactionLog;
  txoValidations: { [txoId: string]: boolean };
}
