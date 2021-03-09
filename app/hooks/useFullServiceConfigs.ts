import { useState } from 'react';

import LocalStore from '../utils/LocalStore';

interface UseFullServiceConfigs {
  leaveFullServiceRunning: boolean;
  ledgerDbPath: string;
  fullServiceDbPath: string;
  toggleLeaveFullServiceRunning: () => void;
}

const useFullServiceConfigs = (): UseFullServiceConfigs => {
  const LocalStoreInstance = new LocalStore();
  const initialLeaveFullServiceRunningStore = LocalStoreInstance.getLeaveFullServiceRunning();
  // This coerces initial state of null to false
  const initialLeaveFullServiceRunningState = initialLeaveFullServiceRunningStore === true;
  const [leaveFullServiceRunning, setLeaveFullServiceRunning] = useState(
    initialLeaveFullServiceRunningState
  );

  const toggleLeaveFullServiceRunning = () => {
    const previousLeaveFullServiceRunningState = LocalStoreInstance.getLeaveFullServiceRunning();
    const newLeaveFullServiceRunningState = !previousLeaveFullServiceRunningState;
    LocalStoreInstance.setLeaveFullServiceRunning(newLeaveFullServiceRunningState);

    setLeaveFullServiceRunning(newLeaveFullServiceRunningState);
  };

  // Paths
  const ledgerDbPath = LocalStoreInstance.getFullServiceLedgerDbPath();
  const fullServiceDbPath = LocalStoreInstance.getFullServiceDbPath();

  return {
    fullServiceDbPath,
    leaveFullServiceRunning,
    ledgerDbPath,
    toggleLeaveFullServiceRunning,
  };
};

export default useFullServiceConfigs;
