import Store from 'electron-store';
import { SjclCipherEncrypted } from 'sjcl';

interface LocalStoreSchema {
  [key: string]: { type: 'string' | 'array' | 'boolean' };
}

const STORE_NAME = 'mobilecoin_config';

export const schemaKeys = {
  ENCRYPTED_ENTROPY: 'encryptedEntropy',
  GIFT_CODES: 'giftCodes',
  HASHED_PIN: 'hashedPin',
  LEAVE_MOBILECOIND_RUNNING: 'leaveMobilecoindRunning',
  LEDGER_DB_PATH: 'ledgerDbPath',
  MINIMUM_FOR_PIN: 'minimumPin',
  MOBILECOIND_DB_PATH: 'mobilecoindDbPath',
  NAME: 'name',
  SALT: 'salt',
  THEME: 'theme',
};

export const schema: LocalStoreSchema = {
  [schemaKeys.ENCRYPTED_ENTROPY]: { type: 'string' },
  [schemaKeys.GIFT_CODES]: { type: 'array' },
  [schemaKeys.HASHED_PIN]: { type: 'string' },
  [schemaKeys.LEAVE_MOBILECOIND_RUNNING]: { type: 'boolean' },
  [schemaKeys.LEDGER_DB_PATH]: { type: 'string' },
  [schemaKeys.MINIMUM_FOR_PIN]: { type: 'string' },
  [schemaKeys.MOBILECOIND_DB_PATH]: { type: 'string' },
  [schemaKeys.NAME]: { type: 'string' },
  [schemaKeys.SALT]: { type: 'string' },
  [schemaKeys.THEME]: { type: 'string' },
};

let store = new Store({ name: STORE_NAME, schema });

export const setStore = (newStore: Store): void => {
  store = newStore;
};

export const getEncryptedEntropy = (): SjclCipherEncrypted =>
  store.get(schemaKeys.ENCRYPTED_ENTROPY) as SjclCipherEncrypted;

export const setEncryptedEntropy = (encryptedEntropy: SjclCipherEncrypted): void => {
  store.set(schemaKeys.ENCRYPTED_ENTROPY, encryptedEntropy);
};

export const getGiftCodes = (): Array<string> => store.get(schemaKeys.GIFT_CODES) as Array<string>;

export const setGiftCodes = (giftCodes: Array<string>): void => {
  store.set(schemaKeys.GIFT_CODES, giftCodes);
};

export const getHashedPin = (): string => (store.get(schemaKeys.HASHED_PIN) as string) || '';

export const setHashedPin = (hashedPin: string | null): void => {
  store.set(schemaKeys.HASHED_PIN, hashedPin || '');
};

export const getLeaveMobilecoindRunning = (): boolean =>
  store.get(schemaKeys.LEAVE_MOBILECOIND_RUNNING) as boolean;

export const setLeaveMobilecoindRunning = (leaveMobilecoindRunning: boolean): void => {
  store.set(schemaKeys.LEAVE_MOBILECOIND_RUNNING, leaveMobilecoindRunning);
};

export const getMinimumForPin = (): number => Number(store.get(schemaKeys.MINIMUM_FOR_PIN));

export const setMinimumForPin = (minimumForPin: number | null): void => {
  store.set(schemaKeys.MINIMUM_FOR_PIN, String(minimumForPin) || '0');
};

// TODO - add type guards to app
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards
export const getLedgerDbPath = (): string => {
  const ledgerDbPath = store.get(schemaKeys.LEDGER_DB_PATH);
  return typeof ledgerDbPath === 'string' ? ledgerDbPath : '';
};

export const getMobilecoindDbPath = (): string => {
  const mobilecoindDbPath = store.get(schemaKeys.MOBILECOIND_DB_PATH);
  return typeof mobilecoindDbPath === 'string' ? mobilecoindDbPath : '';
};

export const getTheme = (): string => {
  const theme = store.get(schemaKeys.THEME);
  return typeof theme === 'string' ? theme : 'system';
};

export const setLedgerDbPath = (name: string): void => {
  store.set(schemaKeys.LEDGER_DB_PATH, name);
};

export const setMobilecoindDbPath = (name: string): void => {
  store.set(schemaKeys.MOBILECOIND_DB_PATH, name);
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
