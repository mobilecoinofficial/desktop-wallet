import { addAccountAction, AddAccountAction, ADD_ACCOUNT } from './addAccountAction';
import {
  confirmEntropyKnownAction,
  CONFIRM_ENTROPY_KNOWN,
  ConfirmEntropyKnownAction,
} from './confirmEntropyKnownAction';
import { createAccountAction, CREATE_ACCOUNT, CreateAccountAction } from './createAccountAction';
import { createWalletAction, CREATE_WALLET, CreateWalletAction } from './createWalletAction';
import { deleteAccountAction, DELETE_ACCOUNT, DeleteAccountAction } from './deleteAccountAction';
import { deleteWalletAction, DELETE_WALLET, DeleteWalletAction } from './deleteWalletAction';
import {
  getAllGiftCodesAction,
  GET_ALL_GIFT_CODES,
  GetAllGiftCodesAction,
} from './getAllGiftCodesAction';
import {
  getAllTransactionLogsForAccountAction,
  GET_ALL_TRANSACTION_LOGS_FOR_ACCOUNT,
  GetAllTransactionLogsForAccountAction,
} from './getAllTransactionLogsForAccountAction';
import {
  getAllTxosForAccountAction,
  GET_ALL_TXOS_FOR_ACCOUNT,
  GetAllTxosForAccountAction,
} from './getAllTxosForAccountAction';
import { getFeePmobAction, GetFeePmobAction, GET_FEE_PMOB } from './getFeePmobAction';
import { importAccountAction, IMPORT_ACCOUNT, ImportAccountAction } from './importAccountAction';
import { initializeAction, INITIALIZE, InitializeAction } from './initializeAction';
import { logErrorAction, LogErrorAction, LOG_ERROR } from './logErrorAction';
import { selectAccountAction, SELECT_ACCOUNT, SelectAccountAction } from './selectAccountAction';
import { unlockWalletAction, UNLOCK_WALLET, UnlockWalletAction } from './unlockWalletAction';
import {
  updateContactsAction,
  UPDATE_CONTACTS,
  UpdateContactsAction,
} from './updateContactsAction';
import {
  updatePasswordAction,
  UPDATE_PASSWORD,
  UpdatePasswordAction,
} from './updatePasswordAction';
import { updatePinAction, UPDATE_PIN, UpdatePinAction } from './updatePinAction';
import { updateStatusAction, UPDATE_WALLET_STATUS, UpdateStatusAction } from './updateStatusAction';

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
  LOG_ERROR,
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
  | LogErrorAction
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
  LogErrorAction,
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
  logErrorAction,
  selectAccountAction,
  unlockWalletAction,
  updateContactsAction,
  getAllGiftCodesAction,
  updatePasswordAction,
  updatePinAction,
  updateStatusAction,
};
