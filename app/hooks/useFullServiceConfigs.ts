import { useState } from 'react';

import * as localStore from '../utils/LocalStore';

interface UseFullServiceConfigs {
  leaveFullServiceRunning: boolean;
  ledgerDbPath: string;
  fullServiceBinariesPath: string;
  fullServiceDbPath: string;
  toggleLeaveFullServiceRunning: () => void;
}

export const useFullServiceConfigs = (): UseFullServiceConfigs => {
  const initialLeaveFullServiceRunningStore = localStore.getLeaveFullServiceRunning();
  // This coerces initial state of null to false
  const initialLeaveFullServiceRunningState = initialLeaveFullServiceRunningStore === true;
  const [leaveFullServiceRunning, setLeaveFullServiceRunning] = useState(
    initialLeaveFullServiceRunningState
  );

  const toggleLeaveFullServiceRunning = () => {
    const previousLeaveFullServiceRunningState = localStore.getLeaveFullServiceRunning();
    const newLeaveFullServiceRunningState = !previousLeaveFullServiceRunningState;
    localStore.setLeaveFullServiceRunning(newLeaveFullServiceRunningState);

    setLeaveFullServiceRunning(newLeaveFullServiceRunningState);
  };

  // Paths
  const ledgerDbPath = localStore.getFullServiceLedgerDbPath();
  const fullServiceBinariesPath = localStore.getFullServiceBinariesPath();
  const fullServiceDbPath = localStore.getFullServiceDbPath();

  return {
    fullServiceBinariesPath,
    fullServiceDbPath,
    leaveFullServiceRunning,
    ledgerDbPath,
    toggleLeaveFullServiceRunning,
  };
};
