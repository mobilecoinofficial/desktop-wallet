import { DeleteWalletAction, DELETE_WALLET } from './type';

export const deleteWalletAction = (): DeleteWalletAction => ({
  type: DELETE_WALLET,
});
