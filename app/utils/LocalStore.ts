import Store from 'electron-store';
import { SjclCipherEncrypted } from 'sjcl';

interface LocalStoreSchema {
  [key: string]: { type: 'string' | 'array' | 'boolean' };
}

const STORE_NAME = 'mobilecoin_config';

export const schemaKeys = {
  CONTACTS: 'contacts',
  ENCRYPTED_ENTROPY: 'encryptedEntropy',
  FULL_SERVICE_DB_PATH: 'fullServiceDbPath',
  FULL_SERVICE_LEDGER_DB_PATH: 'fullServiceLedgerDbPath',
  GIFT_CODES: 'giftCodes',
  HASHED_PASSWORD: 'hashedPassword',
  HASHED_PASSWORD_SALT: 'hashedPasswordSalt',
  HASHED_PIN: 'hashedPin',
  LEAVE_FULL_SERVICE_RUNNING: 'leaveFullServiceRunning',
  LEDGER_DB_PATH: 'ledgerDbPath',
  MINIMUM_FOR_PIN: 'minimumPin',
  NAME: 'name',
  SALT: 'salt',
  THEME: 'theme',
};

export const schema: LocalStoreSchema = {
  [schemaKeys.CONTACTS]: { type: 'string' },
  [schemaKeys.ENCRYPTED_ENTROPY]: { type: 'string' },
  [schemaKeys.FULL_SERVICE_DB_PATH]: { type: 'string' },
  [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: { type: 'string' },
  [schemaKeys.GIFT_CODES]: { type: 'array' },
  [schemaKeys.HASHED_PASSWORD]: { type: 'string' },
  [schemaKeys.HASHED_PASSWORD_SALT]: { type: 'string' },
  [schemaKeys.HASHED_PIN]: { type: 'string' },
  [schemaKeys.LEAVE_FULL_SERVICE_RUNNING]: { type: 'boolean' },
  [schemaKeys.LEDGER_DB_PATH]: { type: 'string' },
  [schemaKeys.NAME]: { type: 'string' },
  [schemaKeys.SALT]: { type: 'string' },
  [schemaKeys.THEME]: { type: 'string' },
};

let store = new Store({ name: STORE_NAME, schema });

export const setStore = (newStore: Store): void => {
  store = newStore;
};

export const getContacts = (): [] => JSON.parse((store.get(schemaKeys.CONTACTS) as string) || '[]');

export const setContacts = (contacts: []): void => {
  store.set(schemaKeys.CONTACTS, JSON.stringify(contacts));
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

export const getLeaveFullServiceRunning = (): boolean =>
  store.get(schemaKeys.LEAVE_FULL_SERVICE_RUNNING) as boolean;

export const setLeaveFullServiceRunning = (leaveFullServiceRunning: boolean): void => {
  store.set(schemaKeys.LEAVE_FULL_SERVICE_RUNNING, leaveFullServiceRunning);
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

export const getTheme = (): string => {
  const theme = store.get(schemaKeys.THEME);
  return typeof theme === 'string' ? theme : 'system';
};

export const getHashedPassword = (): string | null => {
  const hashedPassword = store.get(schemaKeys.HASHED_PASSWORD);
  return typeof hashedPassword === 'string' ? hashedPassword : null;
};

// TODO - add tests
export const setHashedPassword = (hashedPassword: string): void => {
  store.set({
    [schemaKeys.HASHED_PASSWORD]: hashedPassword,
  });
};

// TODO - add tests
export const getHashedPasswordSalt = (): string | null => {
  const hashedPasswordSalt = store.get(schemaKeys.HASHED_PASSWORD_SALT);
  return typeof hashedPasswordSalt === 'string' ? hashedPasswordSalt : null;
};

// TODO - add tests
export const setHashedPasswordSalt = (hashedPasswordSalt: string): void => {
  store.set({
    [schemaKeys.HASHED_PASSWORD_SALT]: hashedPasswordSalt,
  });
};

export const getFullServiceDbPath = (): string => {
  const fullServiceDbPath = store.get(schemaKeys.FULL_SERVICE_DB_PATH);
  return typeof fullServiceDbPath === 'string' ? fullServiceDbPath : '';
};

export const getFullServiceLedgerDbPath = () => store.get(schemaKeys.FULL_SERVICE_LEDGER_DB_PATH);

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
