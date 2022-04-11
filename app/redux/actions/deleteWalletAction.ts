export const DELETE_WALLET = 'DELETE_WALLET';

export type DeleteWalletAction = {
  type: 'DELETE_WALLET';
};

export const deleteWalletAction = (): DeleteWalletAction => ({
  type: DELETE_WALLET,
});
