import { addAccountAction } from './addAccount/action';
import { ADD_ACCOUNT, AddAccountAction } from './addAccount/type';
import { confirmEntropyKnownAction } from './confirmEntropyKnown/action';
import { CONFIRM_ENTROPY_KNOWN, ConfirmEntropyKnownAction } from './confirmEntropyKnown/type';
import { createAccountAction } from './createAccount/action';
import { CREATE_ACCOUNT, CreateAccountAction } from './createAccount/type';
import { createWalletAction } from './createWallet/action';
import { CREATE_WALLET, CreateWalletAction } from './createWallet/type';
import { deleteAccountAction } from './deleteAccount/action';
import { DELETE_ACCOUNT, DeleteAccountAction } from './deleteAccount/type';
import { deleteWalletAction } from './deleteWallet/action';
import { DELETE_WALLET, DeleteWalletAction } from './deleteWallet/type';
import {
  fetchAllTransactionLogsForAccountFailureAction,
  fetchAllTransactionLogsForAccountStartedAction,
  fetchAllTransactionLogsForAccountSuccessAction,
} from './fetchAllTransactionLogsForAccount/action';
import {
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE,
  FetchAllTransactionLogsForAccountFailureAction,
  FetchAllTransactionLogsForAccountStartedAction,
  FetchAllTransactionLogsForAccountSuccessAction,
} from './fetchAllTransactionLogsForAccount/type';
import { fetchAllTxosForAccountAction } from './fetchAllTxosForAccount/action';
import {
  FETCH_ALL_TXOS_FOR_ACCOUNT,
  FetchAllTxosForAccountAction,
} from './fetchAllTxosForAccount/type';
import { importAccountAction } from './importAccount/action';
import { IMPORT_ACCOUNT, ImportAccountAction } from './importAccount/type';
import { initializeAction } from './initialize/action';
import { INITIALIZE, InitializeAction } from './initialize/type';
import { selectAccountAction } from './selectAccount/action';
import { SELECT_ACCOUNT, SelectAccountAction } from './selectAccount/type';
import { unlockWalletAction } from './unlockWallet/action';
import { UNLOCK_WALLET, UnlockWalletAction } from './unlockWallet/type';
import { updateContactsAction } from './updateContacts/action';
import { UPDATE_CONTACTS, UpdateContactsAction } from './updateContacts/type';
import { updateFeePmobAction } from './updateFeePmob/action';
import { UPDATE_FEE_PMOB, UpdateFeePmobAction } from './updateFeePmob/type';
import { updateGiftCodesAction } from './updateGiftCodes/action';
import { UPDATE_GIFT_CODES, UpdateGiftCodesAction } from './updateGiftCodes/type';
import { updatePassphraseAction } from './updatePassphrase/action';
import { UPDATE_PASSPHRASE, UpdatePassphraseAction } from './updatePassphrase/type';
import { updatePinAction } from './updatePin/action';
import { UPDATE_PIN, UpdatePinAction } from './updatePin/type';
import { updateStatusAction } from './updateStatus/action';
import { UPDATE_WALLET_STATUS, UpdateStatusAction } from './updateStatus/type';

// Redux Types
export {
  ADD_ACCOUNT,
  CONFIRM_ENTROPY_KNOWN,
  CREATE_ACCOUNT,
  CREATE_WALLET,
  DELETE_ACCOUNT,
  DELETE_WALLET,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_STARTED,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_SUCCESS,
  FETCH_ALL_TRANSACTION_LOGS_FOR_ACCOUNT_FAILURE,
  FETCH_ALL_TXOS_FOR_ACCOUNT,
  IMPORT_ACCOUNT,
  INITIALIZE,
  SELECT_ACCOUNT,
  UNLOCK_WALLET,
  UPDATE_CONTACTS,
  UPDATE_FEE_PMOB,
  UPDATE_GIFT_CODES,
  UPDATE_PASSPHRASE,
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
  | FetchAllTransactionLogsForAccountStartedAction
  | FetchAllTransactionLogsForAccountSuccessAction
  | FetchAllTransactionLogsForAccountFailureAction
  | FetchAllTxosForAccountAction
  | ImportAccountAction
  | InitializeAction
  | SelectAccountAction
  | UnlockWalletAction
  | UpdateContactsAction
  | UpdateFeePmobAction
  | UpdateGiftCodesAction
  | UpdatePassphraseAction
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
  FetchAllTransactionLogsForAccountStartedAction,
  FetchAllTransactionLogsForAccountSuccessAction,
  FetchAllTransactionLogsForAccountFailureAction,
  FetchAllTxosForAccountAction,
  ImportAccountAction,
  InitializeAction,
  SelectAccountAction,
  UnlockWalletAction,
  UpdateContactsAction,
  UpdateFeePmobAction,
  UpdateGiftCodesAction,
  UpdatePassphraseAction,
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
  fetchAllTransactionLogsForAccountStartedAction,
  fetchAllTransactionLogsForAccountSuccessAction,
  fetchAllTransactionLogsForAccountFailureAction,
  fetchAllTxosForAccountAction,
  importAccountAction,
  initializeAction,
  selectAccountAction,
  unlockWalletAction,
  updateContactsAction,
  updateFeePmobAction,
  updateGiftCodesAction,
  updatePassphraseAction,
  updatePinAction,
  updateStatusAction,
};
