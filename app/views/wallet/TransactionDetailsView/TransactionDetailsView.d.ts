export interface TransactionDetailsViewProps {
  amount: number;
  comment: string;
  dateTime: Date;
  direction: string;
  id: string;
  name: string;
  onChangedComment: any;
  onClickBack: any;
  sign: string;
  status: string;
}
