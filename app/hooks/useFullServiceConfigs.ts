import { useState } from 'react';

import * as localStore from '../utils/LocalStore';

interface UseFullServiceConfigs {
  leaveFullServiceRunning: boolean;
  ledgerDbPath: string;
  fullServiceDbPath: string;
  toggleLeaveFullServiceRunning: () => void;
}

const useFullServiceConfigs = (): UseFullServiceConfigs => {
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
  const fullServiceDbPath = localStore.getFullServiceDbPath();

  return {
    fullServiceDbPath,
    leaveFullServiceRunning,
    ledgerDbPath,
    toggleLeaveFullServiceRunning,
  };
};

export default useFullServiceConfigs;
