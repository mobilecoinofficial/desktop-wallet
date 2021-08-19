export const DELETE_WALLET = 'DELETE_WALLET';

export type DeleteWalletActionType = {
  type: 'DELETE_WALLET';
};

export const deleteWalletAction = (): DeleteWalletActionType => ({
  type: DELETE_WALLET,
});
