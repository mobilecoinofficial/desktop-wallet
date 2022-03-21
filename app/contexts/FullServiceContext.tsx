import React, { createContext /* useState */ } from 'react';
import type { FC, ReactNode } from 'react';

// import { updateStatus } from '../redux/actions/updateStatus/service';
import { initialReduxStoreState, ReduxStoreState } from '../redux/reducers/reducers';
import { store } from '../redux/store';
// import { fetchAllTransactionLogsForAccount } from '../services/fetchAllTransactionLogsForAccount.service';
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
}: FullServiceProviderProps) => (
  // const [fetchUpdatesTimer, setFetchUpdatesTimer] = useState<null | NodeJS.Timer>(null);

  // Initialize App On Startup
  // useEffect(() => {
  //   try {
  //     const encryptedPassphrase = localStore.getEncryptedPassphrase();
  //     initialize(encryptedPassphrase);
  //   } catch (err) {
  //     initialize(undefined);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (fetchUpdatesTimer !== null) {
  //     clearInterval(fetchUpdatesTimer);
  //   }

  //   const { selectedAccount } = store.getState();

  //   if (selectedAccount === undefined || selectedAccount === null) {
  //     return;
  //   }

  //   const { accountId } = selectedAccount.account;

  //   const fetchBalance = async () => {
  //     updateStatus(accountId, selectedAccount.account);
  //   };

  //   const fetchLogs = async () => {
  //     fetchAllTransactionLogsForAccount(accountId);
  //   };

  //   setFetchUpdatesTimer(
  //     setInterval(() => {
  //       fetchBalance();
  //       fetchLogs();
  //     }, 10000)
  //   );
  // }, []);

  <FullServiceContext.Provider value={{ ...store.getState() }}>
    {children}
  </FullServiceContext.Provider>
);

export default FullServiceContext;
