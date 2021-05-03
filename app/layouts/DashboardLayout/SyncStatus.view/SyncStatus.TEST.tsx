// import React from 'react';

// import { act, render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import '../../../testUtils/i18nForTests';
// import { ipcRenderer } from 'electron';

// import { SyncStatus } from './SyncStatus.view';

// describe('SyncStatus', () => {
//   test('SyncStatus renders error when NetworkBlockIndex is less than LocalBlockIndex of SelectedAccount', () => {
//     const selectedAccount = {
//       account: {
//         accountId: '1234',
//         firstBlockIndex: '1',
//         key_derivation_version: '1',
//         mainAddress: 'b58 code',
//         name: null,
//         nextSubaddressIndex: '1235',
//         object: 'account',
//       },
//       balanceStatus: {
//         accountBlockIndex: '1234',
//         isSynced: true,
//         localBlockIndex: '1234',
//         networkBlockIndex: '123',
//         object: 'balance',
//         orphanedPmob: '1234',
//         pendingPmob: '1234',
//         secretedPmob: '1234',
//         spentPmob: '1234',
//         unspentPmob: '1234',
//       },
//     };
//     const events = {}
//     const sendSpy = jest.spyOn(ipcRenderer, 'send').mockImplementation((event, data) => {
//       events[event](event, data);
//     });

//     render(<SyncStatus selectedAccount={selectedAccount} />);

//     act(() => {
//       ipcRenderer.send('sync-status', 'ERROR');
//     });
//     expect(screen.getByText('Please see Admin Panel in Settings.')).toBeInTheDocument();
//   });
// });
