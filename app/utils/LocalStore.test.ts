import Store from 'electron-store';

import LocalStore, { schema, schemaKeys } from './LocalStore';

const setup = () => {
  // Mocks
  const mockStoreGet = jest.fn((key: string) => {
    return key;
  });
  const mockStoreSet = jest.fn();
  const mockStore = {
    get: mockStoreGet,
    set: mockStoreSet,
  };

  const LocalStoreInstance = new LocalStore();
  // @ts-ignore mock
  const MockLocalStoreInstance = new LocalStore(mockStore);

  return {
    LocalStoreInstance,
    MockLocalStoreInstance,
    mockStore,
    mockStoreGet,
    mockStoreSet,
  };
};

describe('LocalStore', () => {
  describe('export', () => {
    test('default export the LocalStore class', () => {
      expect(typeof LocalStore).toMatch('function');
      expect(LocalStore.name).toMatch('LocalStore');
    });
  });

  describe('constructor', () => {
    test('initalize the electron-store object as this.store by default', () => {
      const { LocalStoreInstance } = setup();
      expect(LocalStoreInstance.store).toBeInstanceOf(Store);
    });

    test('set this.store if given store argument', () => {
      const { MockLocalStoreInstance, mockStore } = setup();

      expect(MockLocalStoreInstance.store).toBe(mockStore);
    });

    test('set this.schema', () => {
      const { LocalStoreInstance } = setup();

      expect(LocalStoreInstance.schema).toBe(schema);
    });
  });

  describe('functions', () => {
    describe('.getEncryptedEntropy', () => {
      test('return store.get for encryptedEntropy', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getEncryptedEntropy()).toBe(schemaKeys.ENCRYPTED_ENTROPY);
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.ENCRYPTED_ENTROPY);
      });
    });

    describe('.setEncryptedEntropy', () => {
      test('return store.set for encryptedEntropy', () => {
        const { MockLocalStoreInstance, mockStoreSet } = setup();
        const fakeEncryptedEntropy = 'fakeEncryptedEntropy';
        // @ts-ignore mock
        MockLocalStoreInstance.setEncryptedEntropy(fakeEncryptedEntropy);
        expect(mockStoreSet).toHaveBeenCalledWith(
          schemaKeys.ENCRYPTED_ENTROPY,
          fakeEncryptedEntropy
        );
      });
    });

    describe('.getFullServiceLedgerDbPath', () => {
      test('return store.get for ledgerDbPath', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getFullServiceLedgerDbPath()).toBe(
          schemaKeys.FULL_SERVICE_LEDGER_DB_PATH
        );
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_LEDGER_DB_PATH);
      });
    });

    describe('.getFullServiceDbPath', () => {
      test('return store.get for fullServiceDbPath', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getFullServiceDbPath()).toBe(schemaKeys.FULL_SERVICE_DB_PATH);
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_DB_PATH);
      });
    });

    describe('.getGiftCodes', () => {
      test('return store.get for giftCodes', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getGiftCodes()).toBe(schemaKeys.GIFT_CODES);
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.GIFT_CODES);
      });
    });

    describe('.setGiftCodes', () => {
      test('return store.set for giftCodes', () => {
        const { MockLocalStoreInstance, mockStoreSet } = setup();
        const fakeGiftCodes = ['fakeGiftCodes'];

        MockLocalStoreInstance.setGiftCodes(fakeGiftCodes);
        expect(mockStoreSet).toHaveBeenCalledWith(schemaKeys.GIFT_CODES, fakeGiftCodes);
      });
    });

    describe('.getLeaveFullServiceRunning', () => {
      test('return store.get for leaveFullServiceRunning', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getLeaveFullServiceRunning()).toBe(
          schemaKeys.LEAVE_FULL_SERVICE_RUNNING
        );
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.LEAVE_FULL_SERVICE_RUNNING);
      });
    });

    describe('.setLeaveFullServiceRunning', () => {
      test('return store.set for leaveFullServiceRunning', () => {
        const { MockLocalStoreInstance, mockStoreSet } = setup();
        const fakeLeaveFullServiceRunning = false;

        MockLocalStoreInstance.setLeaveFullServiceRunning(fakeLeaveFullServiceRunning);
        expect(mockStoreSet).toHaveBeenCalledWith(
          schemaKeys.LEAVE_FULL_SERVICE_RUNNING,
          fakeLeaveFullServiceRunning
        );
      });
    });

    describe('.getFullServiceLedgerDbPath', () => {
      test('return store.get for ledgerDbPath', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getFullServiceLedgerDbPath()).toBe(
          schemaKeys.FULL_SERVICE_LEDGER_DB_PATH
        );
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_LEDGER_DB_PATH);
      });
    });

    describe('.getFullServiceDbPath', () => {
      test('return store.get for fullServiceDbPath', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getFullServiceDbPath()).toBe(schemaKeys.FULL_SERVICE_DB_PATH);
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_DB_PATH);
      });
    });

    describe('.setLedgerDbPath', () => {
      test('return store.set for setLedgerDbPath', () => {
        const { MockLocalStoreInstance, mockStoreSet } = setup();
        const fakeFullServiceLedgerDbPath = '/fake/full-service/ledger/';
        const fakeFullServiceDbPath = '/fake/path/full-servide/db';

        MockLocalStoreInstance.setDbPaths(
          fakeFullServiceLedgerDbPath,
          fakeFullServiceDbPath,
          fakeFullServiceLedgerDbPath,
          fakeFullServiceDbPath
        );
        expect(mockStoreSet).toHaveBeenCalledWith({
          [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: fakeFullServiceLedgerDbPath,
          [schemaKeys.FULL_SERVICE_DB_PATH]: fakeFullServiceDbPath,
          [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: fakeFullServiceLedgerDbPath,
          [schemaKeys.FULL_SERVICE_DB_PATH]: fakeFullServiceDbPath,
        });
      });
    });

    describe('.getName', () => {
      test('return store.get for Name', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getName()).toBe(schemaKeys.NAME);
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.NAME);
      });
    });

    describe('.setName', () => {
      test('return store.set for Name', () => {
        const { MockLocalStoreInstance, mockStoreSet } = setup();
        const fakeName = 'Tom Fakery';

        MockLocalStoreInstance.setName(fakeName);
        expect(mockStoreSet).toHaveBeenCalledWith(schemaKeys.NAME, fakeName);
      });
    });

    describe('.getSalt', () => {
      test('return store.get for Salt', () => {
        const { MockLocalStoreInstance, mockStoreGet } = setup();

        expect(MockLocalStoreInstance.getSalt()).toBe(schemaKeys.SALT);
        expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.SALT);
      });
    });

    describe('.setSalt', () => {
      test('return store.set for Salt', () => {
        const { MockLocalStoreInstance, mockStoreSet } = setup();
        const fakeSalt = 'salt/fakery';

        MockLocalStoreInstance.setSalt(fakeSalt);
        expect(mockStoreSet).toHaveBeenCalledWith(schemaKeys.SALT, fakeSalt);
      });
    });
  });
});
