import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { SyncStatus } from './SyncStatus.view';

describe('SyncStatus', () => {
  test('SyncStatus renders error when NetworkBlockIndex is less than LocalBlockIndex of SelectedAccount', async () => {
    const sendSyncStatus = jest.fn();
    const selectedAccount = {
      account: {
        accountId: '1234',
        firstBlockIndex: '1',
        key_derivation_version: '1',
        mainAddress: 'b58 code',
        name: null,
        nextSubaddressIndex: '1235',
        object: 'account',
      },
      balanceStatus: {
        accountBlockIndex: '1234',
        isSynced: true,
        localBlockIndex: '1234',
        networkBlockIndex: '123',
        object: 'balance',
        orphanedPmob: '1234',
        pendingPmob: '1234',
        secretedPmob: '1234',
        spentPmob: '1234',
        unspentPmob: '1234',
      },
    };

    render(<SyncStatus selectedAccount={selectedAccount} sendSyncStatus={sendSyncStatus} />);

    fireEvent.mouseOver(screen.getByTestId('tooltip-title'));
    await waitFor(() =>
      expect(screen.getByText('Please see Admin Panel in Settings.')).toBeInTheDocument()
    );
  });

  test('SyncStatus renders syncing message when the difference between NetworkBlockIndex and AccountBlockIndex is too large', async () => {
    const sendSyncStatus = jest.fn();
    const selectedAccount = {
      account: {
        accountId: '1234',
        firstBlockIndex: '1',
        key_derivation_version: '1',
        mainAddress: 'b58 code',
        name: null,
        nextSubaddressIndex: '1235',
        object: 'account',
      },
      balanceStatus: {
        accountBlockIndex: '123',
        isSynced: true,
        localBlockIndex: '1234',
        networkBlockIndex: '1234',
        object: 'balance',
        orphanedPmob: '1234',
        pendingPmob: '1234',
        secretedPmob: '1234',
        spentPmob: '1234',
        unspentPmob: '1234',
      },
    };

    render(<SyncStatus selectedAccount={selectedAccount} sendSyncStatus={sendSyncStatus} />);

    fireEvent.mouseOver(screen.getByTestId('tooltip-title'));
    await waitFor(() => expect(screen.getByText(/Syncing with the ledger/)).toBeInTheDocument());
  });

  test('SyncStatus renders synced message when the difference between NetworkBlockIndex and AccountBlockIndex is acceptable', async () => {
    const sendSyncStatus = jest.fn();
    const selectedAccount = {
      account: {
        accountId: '1234',
        firstBlockIndex: '1',
        key_derivation_version: '1',
        mainAddress: 'b58 code',
        name: null,
        nextSubaddressIndex: '1235',
        object: 'account',
      },
      balanceStatus: {
        accountBlockIndex: '1234',
        isSynced: true,
        localBlockIndex: '1234',
        networkBlockIndex: '1234',
        object: 'balance',
        orphanedPmob: '1234',
        pendingPmob: '1234',
        secretedPmob: '1234',
        spentPmob: '1234',
        unspentPmob: '1234',
      },
    };

    render(<SyncStatus selectedAccount={selectedAccount} sendSyncStatus={sendSyncStatus} />);

    fireEvent.mouseOver(screen.getByTestId('tooltip-title'));
    await waitFor(() =>
      expect(screen.getByText(/100% synced with the ledger/)).toBeInTheDocument()
    );
  });
});
