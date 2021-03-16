/* eslint-disable jest/no-commented-out-tests */
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

    // describe('.getFullServiceLedgerDbPath', () => {
    //   test('return store.get for ledgerDbPath', () => {
    //     const { MockLocalStoreInstance, mockStoreGet } = setup();

    //     expect(MockLocalStoreInstance.getFullServiceLedgerDbPath()).toBe(
    //       schemaKeys.FULL_SERVICE_LEDGER_DB_PATH
    //     );
    //     expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_LEDGER_DB_PATH);
    //   });
    // });

    // describe('.getFullServiceDbPath', () => {
    //   test('return store.get for fullServiceDbPath', () => {
    //     const { MockLocalStoreInstance, mockStoreGet } = setup();

    //     expect(MockLocalStoreInstance.getFullServiceDbPath()).toBe(schemaKeys.FULL_SERVICE_DB_PATH);
    //     expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_DB_PATH);
    //   });
    // });

    // describe('.getGiftCodes', () => {
    //   test('return store.get for giftCodes', () => {
    //     const { MockLocalStoreInstance, mockStoreGet } = setup();

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

    // describe('.getLeaveFullServiceRunning', () => {
    //   test('return store.get for leaveFullServiceRunning', () => {
    //     const { MockLocalStoreInstance, mockStoreGet } = setup();

    //     expect(MockLocalStoreInstance.getLeaveFullServiceRunning()).toBe(
    //       schemaKeys.LEAVE_FULL_SERVICE_RUNNING
    //     );
    //     expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.LEAVE_FULL_SERVICE_RUNNING);
    //   });
    // });

    // describe('.setLeaveFullServiceRunning', () => {
    //   test('return store.set for leaveFullServiceRunning', () => {
    //     const { MockLocalStoreInstance, mockStoreSet } = setup();
    //     const fakeLeaveFullServiceRunning = false;

    //     MockLocalStoreInstance.setLeaveFullServiceRunning(fakeLeaveFullServiceRunning);
    //     expect(mockStoreSet).toHaveBeenCalledWith(
    //       schemaKeys.LEAVE_FULL_SERVICE_RUNNING,
    //       fakeLeaveFullServiceRunning
    //     );
    //   });
    // });

    // describe('.getFullServiceLedgerDbPath', () => {
    //   test('return store.get for ledgerDbPath', () => {
    //     const { MockLocalStoreInstance, mockStoreGet } = setup();

    //     expect(MockLocalStoreInstance.getFullServiceLedgerDbPath()).toBe(
    //       schemaKeys.FULL_SERVICE_LEDGER_DB_PATH
    //     );
    //     expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_LEDGER_DB_PATH);
    //   });
    // });

    // describe('.getFullServiceDbPath', () => {
    //   test('return store.get for fullServiceDbPath', () => {
    //     const { MockLocalStoreInstance, mockStoreGet } = setup();

    //     expect(MockLocalStoreInstance.getFullServiceDbPath()).toBe(schemaKeys.FULL_SERVICE_DB_PATH);
    //     expect(mockStoreGet).toHaveBeenCalledWith(schemaKeys.FULL_SERVICE_DB_PATH);
    //   });
    // });

    // describe('.setLedgerDbPath', () => {
    //   test('return store.set for setLedgerDbPath', () => {
    //     const { MockLocalStoreInstance, mockStoreSet } = setup();
    //     const fakeFullServiceLedgerDbPath = '/fake/full-service/ledger/';
    //     const fakeFullServiceDbPath = '/fake/path/full-servide/db';

    //     MockLocalStoreInstance.setDbPaths(
    //       fakeFullServiceLedgerDbPath,
    //       fakeFullServiceDbPath,
    //       fakeFullServiceLedgerDbPath,
    //       fakeFullServiceDbPath
    //     );
    //     expect(mockStoreSet).toHaveBeenCalledWith({
    //       [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: fakeFullServiceLedgerDbPath,
    //       [schemaKeys.FULL_SERVICE_DB_PATH]: fakeFullServiceDbPath,
    //       [schemaKeys.FULL_SERVICE_LEDGER_DB_PATH]: fakeFullServiceLedgerDbPath,
    //       [schemaKeys.FULL_SERVICE_DB_PATH]: fakeFullServiceDbPath,
    //     });
    //   });
    // });

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
