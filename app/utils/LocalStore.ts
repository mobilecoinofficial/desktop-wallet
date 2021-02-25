import Store from 'electron-store';
import { SjclCipherEncrypted } from 'sjcl';

interface LocalStoreSchema {
  [key: string]: { type: 'string' | 'array' | 'boolean' };
}

export const schemaKeys = {
  ENCRYPTED_ENTROPY: 'encryptedEntropy',
  FULL_SERVICE_DB_PATH: 'fullServiceDbPath',
  FULL_SERVICE_LEDGER_DB_PATH: 'fullServiceLedgerDbPath',
  GIFT_CODES: 'giftCodes',
  HASHED_PASSWORD: 'hashedPassword',
  HASHED_PASSWORD_SALT: 'hashedPasswordSalt',
  LEAVE_MOBILECOIND_RUNNING: 'leaveMobilecoindRunning',
  MOBILECOIND_DB_PATH: 'mobilecoindDbPath',
  MOBILECOIND_LEDGER_DB_PATH: 'mobilecoindLedgerDbPath',
  NAME: 'name',
  SALT: 'salt',
};

export const schema: LocalStoreSchema = {
  [schemaKeys.ENCRYPTED_ENTROPY]: {
    type: 'string',
  },
  [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: {
    type: 'string',
  },
  [schemaKeys.FULL_SERVICE_DB_PATH]: {
    type: 'string',
  },
  [schemaKeys.GIFT_CODES]: {
    type: 'array',
  },
  [schemaKeys.LEAVE_MOBILECOIND_RUNNING]: {
    type: 'boolean',
  },
  [schemaKeys.MOBILECOIND_LEDGER_DB_PATH]: {
    type: 'string',
  },
  [schemaKeys.MOBILECOIND_DB_PATH]: {
    type: 'string',
  },
  [schemaKeys.NAME]: {
    type: 'string',
  },
  [schemaKeys.SALT]: {
    type: 'string',
  },
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

  getFullServiceLedgerDbPath() {
    return this.store.get(schemaKeys.FULL_SERVICE_LEDGER_DB_PATH);
  }

  getFullServiceDbPath() {
    return this.store.get(schemaKeys.FULL_SERVICE_DB_PATH);
  }

  getGiftCodes() {
    return this.store.get(schemaKeys.GIFT_CODES);
  }

  setGiftCodes(giftCodes: Array<string>) {
    this.store.set({
      [schemaKeys.GIFT_CODES]: giftCodes,
    });
  }

  // TODO - add tests
  getHashedPassword(): string | null {
    const hashedPassword = this.store.get(schemaKeys.HASHED_PASSWORD);
    return typeof hashedPassword === 'string' ? hashedPassword : null;
  }

  // TODO - add tests
  setHashedPassword(hashedPassword: string) {
    this.store.set({
      [schemaKeys.HASHED_PASSWORD]: hashedPassword,
    });
  }

  // TODO - add tests
  getHashedPasswordSalt(): string | null {
    const hashedPasswordSalt = this.store.get(schemaKeys.HASHED_PASSWORD_SALT);
    return typeof hashedPasswordSalt === 'string' ? hashedPasswordSalt : null;
  }

  // TODO - add tests
  setHashedPasswordSalt(hashedPasswordSalt: string) {
    this.store.set({
      [schemaKeys.HASHED_PASSWORD_SALT]: hashedPasswordSalt,
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

  getMobilecoindLedgerDbPath() {
    return this.store.get(schemaKeys.MOBILECOIND_LEDGER_DB_PATH);
  }

  getMobilecoindDbPath() {
    return this.store.get(schemaKeys.MOBILECOIND_DB_PATH);
  }

  setDbPaths(
    mobilecoindLedgerDbPath: string,
    mobilecoindDbPath: string,
    fullServiceLedgerDbPath: string,
    fullServiceDbPath: string,
  ) {
    this.store.set({
      [schemaKeys.MOBILECOIND_LEDGER_DB_PATH]: mobilecoindLedgerDbPath,
      [schemaKeys.MOBILECOIND_DB_PATH]: mobilecoindDbPath,
      [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: fullServiceLedgerDbPath,
      [schemaKeys.FULL_SERVICE_DB_PATH]: fullServiceDbPath,
    });
  }

  getName() {
    return this.store.get(schemaKeys.NAME);
  }

  setName(name: string | null) {
    this.store.set({
      [schemaKeys.NAME]: name,
    });
  }

  getSalt() {
    const salt = this.store.get(schemaKeys.SALT);
    if (typeof salt !== 'string') throw new Error('No salt found.');

    return salt;
  }

  setSalt(salt: string) {
    this.store.set({
      [schemaKeys.SALT]: salt,
    });
  }
}

export default LocalStore;
