export interface AccountCardProps {
  account: { b58Code: string; name?: string; balance: string };
  isGift?: boolean;
}
