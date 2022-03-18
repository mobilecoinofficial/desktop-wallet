import React, { createContext, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';

import * as fullServiceApi from '../fullService/api';
import {
  fetchAllTransactionLogsForAccountAction,
  initializeAction,
  updateStatusAction,
} from '../redux/actions';
import { initialReduxStoreState, ReduxStoreState } from '../redux/reducers/reducers';
import { store } from '../redux/store';
import { fetchAllTransactionLogsForAccount } from '../services/fetchAllTransactionLogsForAccount.service';
import * as localStore from '../utils/LocalStore';

interface FullServiceProviderProps {
  children: ReactNode;
}

const FullServiceContext = createContext<ReduxStoreState>({ ...initialReduxStoreState });

export const wipeAccountContactAndPin = async (): Promise<void> => {
  // Wipe Contacts and PIN
  localStore.deleteEncryptedContacts();
  localStore.deletePinThresholdPmob();
  localStore.deleteEncryptedPin();
};

export const FullServiceProvider: FC<FullServiceProviderProps> = ({
  children,
}: FullServiceProviderProps) => {
  const [fetchUpdatesTimer, setFetchUpdatesTimer] = useState<null | NodeJS.Timer>(null);

  // Initialize App On Startup
  useEffect(() => {
    try {
      const encryptedPassphrase = localStore.getEncryptedPassphrase();
      store.dispatch(initializeAction(encryptedPassphrase));
    } catch (err) {
      store.dispatch(initializeAction(undefined));
    }
  }, []);

  useEffect(() => {
    if (fetchUpdatesTimer !== null) {
      clearInterval(fetchUpdatesTimer);
    }

    const { selectedAccount } = store.getState();

    if (selectedAccount === undefined || selectedAccount === null) {
      return;
    }

    const { accountId } = selectedAccount.account;

    const fetchBalance = async () => {
      const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
      const { walletStatus } = await fullServiceApi.getWalletStatus();
      store.dispatch(updateStatusAction(selectedAccount.account, balanceStatus, walletStatus));
    };

    const fetchLogs = async () => {
      const transactionLogs = await fetchAllTransactionLogsForAccount(accountId);
      store.dispatch(fetchAllTransactionLogsForAccountAction(transactionLogs));
    };

    setFetchUpdatesTimer(
      setInterval(() => {
        fetchBalance();
        fetchLogs();
      }, 10000)
    );
  }, [fetchUpdatesTimer]);

  return (
    <FullServiceContext.Provider value={{ ...store.getState() }}>
      {children}
    </FullServiceContext.Provider>
  );
};

export default FullServiceContext;
