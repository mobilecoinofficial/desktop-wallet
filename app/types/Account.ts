// TODO -- this will be more useful once we implement multiple accounts
export default interface Account {
  b58Code: string;
  balance: string;
  mobUrl: string;
  name?: string | null;
}
