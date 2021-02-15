import Store from 'electron-store';
import { SjclCipherEncrypted } from 'sjcl';

interface LocalStoreSchema {
  [key: string]: { type: 'string' | 'array' | 'boolean' };
}

export const schemaKeys = {
  ENCRYPTED_ENTROPY: 'encryptedEntropy',
  GIFT_CODES: 'giftCodes',
  HASHED_PIN: 'hashedPin',
  LEAVE_MOBILECOIND_RUNNING: 'leaveMobilecoindRunning',
  LEDGER_DB_PATH: 'ledgerDbPath',
  MOBILECOIND_DB_PATH: 'mobilecoindDbPath',
  NAME: 'name',
  SALT: 'salt',
};

export const schema: LocalStoreSchema = {
  [schemaKeys.ENCRYPTED_ENTROPY]: { type: 'string' },
  [schemaKeys.GIFT_CODES]: { type: 'array' },
  [schemaKeys.HASHED_PIN]: { type: 'string' },
  [schemaKeys.LEAVE_MOBILECOIND_RUNNING]: { type: 'boolean' },
  [schemaKeys.LEDGER_DB_PATH]: { type: 'string' },
  [schemaKeys.MOBILECOIND_DB_PATH]: { type: 'string' },
  [schemaKeys.NAME]: { type: 'string' },
  [schemaKeys.SALT]: { type: 'string' },
};

class LocalStore {
  store: Store;

  schema: LocalStoreSchema;

  constructor(store?: Store) {
    this.store = store || new Store({ schema });
    this.schema = schema;
  }

  getEncryptedEntropy() {
    return this.store.get(schemaKeys.ENCRYPTED_ENTROPY);
  }

  setEncryptedEntropy(encryptedEntropy: SjclCipherEncrypted) {
    this.store.set({
      [schemaKeys.ENCRYPTED_ENTROPY]: encryptedEntropy,
    });
  }

  getGiftCodes() {
    return this.store.get(schemaKeys.GIFT_CODES);
  }

  setGiftCodes(giftCodes: Array<string>) {
    this.store.set({
      [schemaKeys.GIFT_CODES]: giftCodes,
    });
  }

  getHashedPin() {
    return this.store.get(schemaKeys.HASHED_PIN) || '';
  }

  setHashedPin(hashedPin: string | null): void {
    this.store.set({
      [schemaKeys.HASHED_PIN]: hashedPin || '',
    });
  }

  getLeaveMobilecoindRunning() {
    return this.store.get(schemaKeys.LEAVE_MOBILECOIND_RUNNING);
  }

  setLeaveMobilecoindRunning(leaveMobilecoindRunning: boolean) {
    this.store.set({
      [schemaKeys.LEAVE_MOBILECOIND_RUNNING]: leaveMobilecoindRunning,
    });
  }

  // TODO - add type guards to app
  // https://www.typescriptlang.org/docs/handbook/advanced-types.html#typeof-type-guards
  getLedgerDbPath(): string {
    const ledgerDbPath = this.store.get(schemaKeys.LEDGER_DB_PATH);
    return typeof ledgerDbPath === 'string' ? ledgerDbPath : '';
  }

  getMobilecoindDbPath() {
    const mobilecoindDbPath = this.store.get(schemaKeys.MOBILECOIND_DB_PATH);
    return typeof mobilecoindDbPath === 'string' ? mobilecoindDbPath : '';
  }

  setDbPaths(ledgerDbPath: string, mobilecoindDbPath: string): void {
    this.store.set({
      [schemaKeys.LEDGER_DB_PATH]: ledgerDbPath,
      [schemaKeys.MOBILECOIND_DB_PATH]: mobilecoindDbPath,
    });
  }

  getName() {
    return this.store.get(schemaKeys.NAME);
  }

  setName(name: string | null): void {
    this.store.set({
      [schemaKeys.NAME]: name,
    });
  }

  getSalt() {
    return this.store.get(schemaKeys.SALT);
  }

  setSalt(salt: string): void {
    this.store.set({
      [schemaKeys.SALT]: salt,
    });
  }
}

export default LocalStore;
