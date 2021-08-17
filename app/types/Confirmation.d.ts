export interface Confirmation {
  txo_id_hex: string;
  txo_index: string;
  confirmation: string;
}

export type Confirmations = [Confirmation];
