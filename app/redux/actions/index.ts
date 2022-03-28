import { addAccountAction, AddAccountAction, ADD_ACCOUNT } from './addAccount';
import {
  confirmEntropyKnownAction,
  CONFIRM_ENTROPY_KNOWN,
  ConfirmEntropyKnownAction,
} from './confirmEntropyKnown';
import { createAccountAction, CREATE_ACCOUNT, CreateAccountAction } from './createAccount';
import { createWalletAction, CREATE_WALLET, CreateWalletAction } from './createWallet';
import { deleteAccountAction, DELETE_ACCOUNT, DeleteAccountAction } from './deleteAccount';
import { deleteWalletAction, DELETE_WALLET, DeleteWalletAction } from './deleteWallet';
import {
  getAllGiftCodesAction,
  GET_ALL_GIFT_CODES,
  GetAllGiftCodesAction,
} from './getAllGiftCodes';
import {
  getAllTransactionLogsForAccountAction,
  GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT,
  GetAllTransactionLogsForAccountAction,
} from './getAllTransactionLogsForAccount';
import {
  getAllTxosForAccountAction,
  GET_ALL_TXOS_FOR_ACCOUNT,
  GetAllTxosForAccountAction,
} from './getAllTxosForAccount';
import { getFeePmobAction, GetFeePmobAction, GET_FEE_PMOB } from './getFeePmob';
import { importAccountAction, IMPORT_ACCOUNT, ImportAccountAction } from './importAccount';
import { initializeAction, INITIALIZE, InitializeAction } from './initialize';
import { selectAccountAction, SELECT_ACCOUNT, SelectAccountAction } from './selectAccount';
import { unlockWalletAction, UNLOCK_WALLET, UnlockWalletAction } from './unlockWallet';
import { updateContactsAction, UPDATE_CONTACTS, UpdateContactsAction } from './updateContacts';
import { updatePasswordAction, UPDATE_PASSWORD, UpdatePasswordAction } from './updatePassword';
import { updatePinAction, UPDATE_PIN, UpdatePinAction } from './updatePin';
import { updateStatusAction, UPDATE_WALLET_STATUS, UpdateStatusAction } from './updateStatus';

// Redux Types
export {
  ADD_ACCOUNT,
  CONFIRM_ENTROPY_KNOWN,
  CREATE_ACCOUNT,
  CREATE_WALLET,
  DELETE_ACCOUNT,
  DELETE_WALLET,
  GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT,
  GET_ALL_TXOS_FOR_ACCOUNT,
  GET_FEE_PMOB,
  IMPORT_ACCOUNT,
  INITIALIZE,
  SELECT_ACCOUNT,
  UNLOCK_WALLET,
  UPDATE_CONTACTS,
  GET_ALL_GIFT_CODES,
  UPDATE_PASSWORD,
  UPDATE_PIN,
  UPDATE_WALLET_STATUS,
};

type Action =
  | AddAccountAction
  | ConfirmEntropyKnownAction
  | CreateAccountAction
  | CreateWalletAction
  | DeleteAccountAction
  | DeleteWalletAction
  | GetAllGiftCodesAction
  | GetAllTransactionLogsForAccountAction
  | GetAllTxosForAccountAction
  | GetFeePmobAction
  | ImportAccountAction
  | InitializeAction
  | SelectAccountAction
  | UnlockWalletAction
  | UpdateContactsAction
  | UpdatePasswordAction
  | UpdatePinAction
  | UpdateStatusAction;

// Typescript Types
export type {
  Action,
  AddAccountAction,
  ConfirmEntropyKnownAction,
  CreateAccountAction,
  CreateWalletAction,
  DeleteAccountAction,
  DeleteWalletAction,
  GetAllTransactionLogsForAccountAction,
  GetAllTxosForAccountAction,
  GetFeePmobAction,
  ImportAccountAction,
  InitializeAction,
  SelectAccountAction,
  UnlockWalletAction,
  UpdateContactsAction,
  GetAllGiftCodesAction,
  UpdatePasswordAction,
  UpdatePinAction,
  UpdateStatusAction,
};

// Action Logic
export {
  addAccountAction,
  confirmEntropyKnownAction,
  createAccountAction,
  createWalletAction,
  deleteAccountAction,
  deleteWalletAction,
  getAllTransactionLogsForAccountAction,
  getAllTxosForAccountAction,
  getFeePmobAction,
  importAccountAction,
  initializeAction,
  selectAccountAction,
  unlockWalletAction,
  updateContactsAction,
  getAllGiftCodesAction,
  updatePasswordAction,
  updatePinAction,
  updateStatusAction,
};
