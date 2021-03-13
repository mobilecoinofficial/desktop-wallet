// TODO :- We will come back to this after the wild wild west phase is over :) Yee haww.

// import Store from 'electron-store';

// import * as localStore from './LocalStore';

// const setup = () => {
//   // Mocks
//   const mockStoreGet = jest.fn((key: string) => {
//     return key;
//   });
//   const mockStoreSet = jest.fn();
//   const mockStore = {
//     get: mockStoreGet,
//     set: mockStoreSet,
//   };

//   // @ts-ignore mock
//   localStore.setStore(mockStore);

//   return {
//     localStore,
//     mockStoreGet,
//     mockStoreSet,
//   };
// };

// // TODO: Fix These Tests!!!
// describe('LocalStore', () => {
//   // describe('export', () => {
//   //   test('default export the LocalStore class', () => {
//   //     expect(typeof localStore).toMatch('function');
//   //     expect(LocalStore.name).toMatch('LocalStore');
//   //   });
//   // });

//   describe('constructor', () => {
//     setup();
//     // test('initalize the electron-store object as this.store by default', () => {
//     //   setup();
//     //   expect(localStore.store).toBeInstanceOf(Store);
//     // });

//     // test('set this.store if given store argument', () => {
//     //   const { MockLocalStoreInstance, mockStore } = setup();

//     //   expect(MockLocalStoreInstance.store).toBe(mockStore);
//     // });

//     // test('set this.schema', () => {
//     //   const { LocalStoreInstance } = setup();

//     //   expect(LocalStoreInstance.schema).toBe(schema);
//     // });
//   });

//   describe('functions', () => {
//     describe('.getEncryptedEntropy', () => {
//       test('return store.get for encryptedEntropy', () => {
//         const { localStore, mockStoreGet } = setup();

//         expect(localStore.getEncryptedEntropy()).toBe(localStore.schemaKeys.ENCRYPTED_ENTROPY);
//         expect(mockStoreGet).toHaveBeenCalledWith(localStore.schemaKeys.ENCRYPTED_ENTROPY);
//       });
//     });

//     describe('.setEncryptedEntropy', () => {
//       test('return store.set for encryptedEntropy', () => {
//         const { MockLocalStoreInstance, mockStoreSet } = setup();
//         const fakeEncryptedEntropy = 'fakeEncryptedEntropy';
//         // @ts-ignore mock
//         MockLocalStoreInstance.setEncryptedEntropy(fakeEncryptedEntropy);
//         expect(mockStoreSet).toHaveBeenCalledWith(
//           localStore.schemaKeys.ENCRYPTED_ENTROPY,
//           fakeEncryptedEntropy
//         );
//       });
//     });

//     describe('.getGiftCodes', () => {
//       test('return store.get for giftCodes', () => {
//         const { MockLocalStoreInstance, mockStoreGet } = setup();

//         expect(MockLocalStoreInstance.getGiftCodes()).toBe(localStore.schemaKeys.GIFT_CODES);
//         expect(mockStoreGet).toHaveBeenCalledWith(localStore.schemaKeys.GIFT_CODES);
//       });
//     });

//     describe('.setGiftCodes', () => {
//       test('return store.set for giftCodes', () => {
//         const { MockLocalStoreInstance, mockStoreSet } = setup();
//         const fakeGiftCodes = ['fakeGiftCodes'];

//         MockLocalStoreInstance.setGiftCodes(fakeGiftCodes);
//         expect(mockStoreSet).toHaveBeenCalledWith(schemaKeys.GIFT_CODES, fakeGiftCodes);
//       });
//     });

//     describe('.getLeaveMobilecoindRunning', () => {
//       test('return store.get for leaveMobilecoindRunning', () => {
//         const { MockLocalStoreInstance, mockStoreGet } = setup();

//         expect(MockLocalStoreInstance.getLeaveMobilecoindRunning()).toBe(
//           schemaKeys.LEAVE_MOBILECOIND_RUNNING
//         );
//         expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.LEAVE_MOBILECOIND_RUNNING);
//       });
//     });

//     describe('.setLeaveMobilecoindRunning', () => {
//       test('return store.set for leaveMobilecoindRunning', () => {
//         const { MockLocalStoreInstance, mockStoreSet } = setup();
//         const fakeLeaveMobilecoindRunning = false;

//         MockLocalStoreInstance.setLeaveMobilecoindRunning(fakeLeaveMobilecoindRunning);
//         expect(mockStoreSet).toHaveBeenCalledWith(
//           schemaKeys.LEAVE_MOBILECOIND_RUNNING,
//           fakeLeaveMobilecoindRunning
//         );
//       });
//     });
//     describe('.getLedgerDbPath', () => {
//       test('return store.get for ledgerDbPath', () => {
//         const { MockLocalStoreInstance, mockStoreGet } = setup();

//         expect(MockLocalStoreInstance.getLedgerDbPath()).toBe(schemaKeys.LEDGER_DB_PATH);
//         expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.LEDGER_DB_PATH);
//       });
//     });

//     describe('.getMobilecoindDbPath', () => {
//       test('return store.get for mobilecoindDbPath', () => {
//         const { MockLocalStoreInstance, mockStoreGet } = setup();

//         expect(MockLocalStoreInstance.getMobilecoindDbPath()).toBe(schemaKeys.MOBILECOIND_DB_PATH);
//         expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.MOBILECOIND_DB_PATH);
//       });
//     });

//     describe('.setLedgerDbPath', () => {
//       test('return store.set for setLedgerDbPath', () => {
//         const { MockLocalStoreInstance, mockStoreSet } = setup();
//         const fakeLedgerDbPath = '/fake/path/to';

//         MockLocalStoreInstance.setLedgerDbPath(fakeLedgerDbPath);
//         expect(mockStoreSet).toHaveBeenCalledWith(schemaKeys.LEDGER_DB_PATH, fakeLedgerDbPath);
//       });
//     });

//     describe('.setMobilecoindDbPath', () => {
//       test('return store.set for setMobilecoindDbPath', () => {
//         const { MockLocalStoreInstance, mockStoreSet } = setup();
//         const fakeMobilecoindDbPath = '/fake/path/to';

//         MockLocalStoreInstance.setMobilecoindDbPath(fakeMobilecoindDbPath);
//         expect(mockStoreSet).toHaveBeenCalledWith(
//           schemaKeys.MOBILECOIND_DB_PATH,
//           fakeMobilecoindDbPath
//         );
//       });
//     });

//     describe('.getName', () => {
//       test('return store.get for Name', () => {
//         const { MockLocalStoreInstance, mockStoreGet } = setup();

//         expect(MockLocalStoreInstance.getName()).toBe(schemaKeys.NAME);
//         expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.NAME);
//       });
//     });

//     describe('.setName', () => {
//       test('return store.set for Name', () => {
//         const { MockLocalStoreInstance, mockStoreSet } = setup();
//         const fakeName = 'Tom Fakery';

//         MockLocalStoreInstance.setName(fakeName);
//         expect(mockStoreSet).toHaveBeenCalledWith(schemaKeys.NAME, fakeName);
//       });
//     });

//     describe('.getSalt', () => {
//       test('return store.get for Salt', () => {
//         const { MockLocalStoreInstance, mockStoreGet } = setup();

//         expect(MockLocalStoreInstance.getSalt()).toBe(schemaKeys.SALT);
//         expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.SALT);
//       });
//     });

//     describe('.setSalt', () => {
//       test('return store.set for Salt', () => {
//         const { MockLocalStoreInstance, mockStoreSet } = setup();
//         const fakeSalt = 'salt/fakery';

//         MockLocalStoreInstance.setSalt(fakeSalt);
//         expect(mockStoreSet).toHaveBeenCalledWith(schemaKeys.SALT, fakeSalt);
//       });
//     });
//   });
// });
