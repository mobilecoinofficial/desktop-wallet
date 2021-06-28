export interface AccountCardProps {
  account: { b58Code: string; name?: string; balance: string };
  isGift?: boolean;
  codeClicked: (code: string, text: string) => void;
}
