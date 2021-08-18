export interface Confirmation {
  txoIdHex: string;
  txoIndex: string;
  confirmation: string;
}

export type Confirmations = [Confirmation];
