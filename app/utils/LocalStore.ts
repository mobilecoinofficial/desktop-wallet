import Store from 'electron-store';
import { SjclCipherEncrypted } from 'sjcl';

import type { StringUInt64 } from '../types/SpecialStrings.d';

interface LocalStoreSchema {
  [key: string]: { type: 'string' | 'array' | 'boolean' };
}

const STORE_NAME = 'mobilecoin_config';

export const schemaKeys = {
  ENCRYPTED_CONTACTS: 'encryptedContacts',
  ENCRYPTED_PASSPHRASE: 'encryptedPassphrase',
  ENCRYPTED_PIN: 'encryptedPin',
  FULL_SERVICE_DB_PATH: 'fullServiceDbPath',
  FULL_SERVICE_LEDGER_DB_PATH: 'fullServiceLedgerDbPath',
  GIFT_CODES: 'giftCodes',
  LEAVE_FULL_SERVICE_RUNNING: 'leaveFullServiceRunning',
  LEDGER_DB_PATH: 'ledgerDbPath',
  NAME: 'name',
  PIN_THRESHOLD_PMOB: 'pinThresholdPmob',
  SALT: 'salt',
  THEME: 'theme',
};

export const schema: LocalStoreSchema = {
  [schemaKeys.ENCRYPTED_CONTACTS]: { type: 'string' },
  [schemaKeys.ENCRYPTED_PASSPHRASE]: { type: 'string' },
  [schemaKeys.ENCRYPTED_PIN]: { type: 'string' },
  [schemaKeys.FULL_SERVICE_DB_PATH]: { type: 'string' },
  [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: { type: 'string' },
  [schemaKeys.GIFT_CODES]: { type: 'array' },
  [schemaKeys.LEAVE_FULL_SERVICE_RUNNING]: { type: 'boolean' },
  [schemaKeys.LEDGER_DB_PATH]: { type: 'string' },
  [schemaKeys.NAME]: { type: 'string' },
  [schemaKeys.PIN_THRESHOLD_PMOB]: { type: 'string' },
  [schemaKeys.SALT]: { type: 'string' },
  [schemaKeys.THEME]: { type: 'string' },
};

let store = new Store({ name: STORE_NAME, schema });

export const setStore = (newStore: Store): void => {
  store = newStore;
};

export const getEncryptedContacts = (): SjclCipherEncrypted =>
  store.get(schemaKeys.ENCRYPTED_CONTACTS) as SjclCipherEncrypted;

export const setEncryptedContacts = (encryptedContacts: SjclCipherEncrypted): void => {
  store.set(schemaKeys.ENCRYPTED_CONTACTS, encryptedContacts);
};

export const deleteEncryptedContacts = (): void => {
  store.delete(schemaKeys.ENCRYPTED_CONTACTS);
};

export const getGiftCodes = (): Array<string> => store.get(schemaKeys.GIFT_CODES) as Array<string>;

export const setGiftCodes = (giftCodes: Array<string>): void => {
  store.set(schemaKeys.GIFT_CODES, giftCodes);
};

export const getEncryptedPin = (): SjclCipherEncrypted | undefined =>
  store.get(schemaKeys.ENCRYPTED_PIN) as SjclCipherEncrypted | undefined;

export const setEncryptedPin = (encryptedPin: SjclCipherEncrypted): void => {
  store.set(schemaKeys.ENCRYPTED_PIN, encryptedPin);
};

export const deleteEncryptedPin = (): void => {
  store.delete(schemaKeys.ENCRYPTED_PIN);
};

export const getLeaveFullServiceRunning = (): boolean =>
  store.get(schemaKeys.LEAVE_FULL_SERVICE_RUNNING) as boolean;

export const setLeaveFullServiceRunning = (leaveFullServiceRunning: boolean): void => {
  store.set(schemaKeys.LEAVE_FULL_SERVICE_RUNNING, leaveFullServiceRunning);
};

export const getPinThresholdPmob = (): StringUInt64 =>
  store.get(schemaKeys.PIN_THRESHOLD_PMOB) as StringUInt64;

export const setPinThresholdPmob = (pinThresholdPmob: StringUInt64): void => {
  store.set(schemaKeys.PIN_THRESHOLD_PMOB, pinThresholdPmob);
};

export const deletePinThresholdPmob = (): void => {
  store.delete(schemaKeys.PIN_THRESHOLD_PMOB);
};

// TODO - add type guards to app
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards
export const getLedgerDbPath = (): string => {
  const ledgerDbPath = store.get(schemaKeys.LEDGER_DB_PATH);
  return typeof ledgerDbPath === 'string' ? ledgerDbPath : '';
};

export const getTheme = (): string => {
  const theme = store.get(schemaKeys.THEME);
  return typeof theme === 'string' ? theme : 'system';
};

export const getEncryptedPassphrase = (): SjclCipherEncrypted | undefined =>
  store.get(schemaKeys.ENCRYPTED_PASSPHRASE) as SjclCipherEncrypted | undefined;

export const setEncryptedPassphrase = (encryptedPassphrase: SjclCipherEncrypted): void => {
  store.set({
    [schemaKeys.ENCRYPTED_PASSPHRASE]: encryptedPassphrase,
  });
};

export const deleteEncryptedPassphrase = (): void => {
  store.delete(schemaKeys.ENCRYPTED_PASSPHRASE);
};

export const getFullServiceDbPath = (): string => {
  const fullServiceDbPath = store.get(schemaKeys.FULL_SERVICE_DB_PATH);
  return typeof fullServiceDbPath === 'string' ? fullServiceDbPath : '';
};

export const getFullServiceLedgerDbPath = () => store.get(schemaKeys.LEDGER_DB_PATH);

export const setLedgerDbPath = (name: string): void => {
  store.set(schemaKeys.LEDGER_DB_PATH, name);
};

export const setFullServiceDbPath = (name: string): void => {
  store.set(schemaKeys.FULL_SERVICE_DB_PATH, name);
};

export const getName = (): string => store.get(schemaKeys.NAME) as string;

export const setName = (name: string | null): void => {
  store.set(schemaKeys.NAME, name);
};

export const getSalt = (): string => store.get(schemaKeys.SALT) as string;

export const setSalt = (salt: string): void => {
  store.set(schemaKeys.SALT, salt);
};

export const setTheme = (theme: 'system' | 'light' | 'dark'): void => {
  store.set(schemaKeys.THEME, theme);
};
