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

class LocalStore {
  store: Store;

  schema: LocalStoreSchema;

  constructor(store?: Store) {
    this.store = store || new Store({ name: STORE_NAME, schema });
    this.schema = schema;
  }

  getEncryptedEntropy(): SjclCipherEncrypted {
    return this.store.get(schemaKeys.ENCRYPTED_ENTROPY) as SjclCipherEncrypted;
  }

  setEncryptedEntropy(encryptedEntropy: SjclCipherEncrypted): void {
    this.store.set(schemaKeys.ENCRYPTED_ENTROPY, encryptedEntropy);
  }

  getGiftCodes(): Array<string> {
    return this.store.get(schemaKeys.GIFT_CODES) as Array<string>;
  }

  setGiftCodes(giftCodes: Array<string>): void {
    this.store.set(schemaKeys.GIFT_CODES, giftCodes);
  }

  getHashedPin(): string {
    return (this.store.get(schemaKeys.HASHED_PIN) as string) || '';
  }

  setHashedPin(hashedPin: string | null): void {
    this.store.set(schemaKeys.HASHED_PIN, hashedPin || '');
  }

  getLeaveMobilecoindRunning(): boolean {
    return this.store.get(schemaKeys.LEAVE_MOBILECOIND_RUNNING) as boolean;
  }

  setLeaveMobilecoindRunning(leaveMobilecoindRunning: boolean): void {
    this.store.set(schemaKeys.LEAVE_MOBILECOIND_RUNNING, leaveMobilecoindRunning);
  }

  getMinimumForPin(): number {
    return Number(this.store.get(schemaKeys.MINIMUM_FOR_PIN));
  }

  setMinimumForPin(minimumForPin: number | null): void {
    this.store.set(schemaKeys.MINIMUM_FOR_PIN, String(minimumForPin) || '0');
  }

  // TODO - add type guards to app
  // https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards
  getLedgerDbPath(): string {
    const ledgerDbPath = this.store.get(schemaKeys.LEDGER_DB_PATH);
    return typeof ledgerDbPath === 'string' ? ledgerDbPath : '';
  }

  getMobilecoindDbPath(): string {
    const mobilecoindDbPath = this.store.get(schemaKeys.MOBILECOIND_DB_PATH);
    return typeof mobilecoindDbPath === 'string' ? mobilecoindDbPath : '';
  }

  getTheme(): string {
    const theme = this.store.get(schemaKeys.THEME);
    return typeof theme === 'string' ? theme : 'system';
  }

  setLedgerDbPath(name: string): void {
    this.store.set(schemaKeys.LEDGER_DB_PATH, name);
  }

  setMobilecoindDbPath(name: string): void {
    this.store.set(schemaKeys.MOBILECOIND_DB_PATH, name);
  }

  getName(): string {
    return this.store.get(schemaKeys.NAME) as string;
  }

  setName(name: string | null): void {
    this.store.set(schemaKeys.NAME, name);
  }

  getSalt(): string {
    return this.store.get(schemaKeys.SALT) as string;
  }

  setSalt(salt: string): void {
    this.store.set(schemaKeys.SALT, salt);
  }

  setTheme(theme: 'system' | 'light' | 'dark'): void {
    this.store.set(schemaKeys.THEME, theme);
  }
}

export default LocalStore;
