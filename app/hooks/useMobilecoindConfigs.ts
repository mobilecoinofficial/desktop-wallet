import { useState } from 'react';

import * as localStore from '../utils/LocalStore';

interface UseMobilecoindConfigs {
  leaveMobilecoindRunning: boolean;
  ledgerDbPath: string;
  mobilecoindDbPath: string;
  toggleLeaveMobilecoindRunning: () => void;
}

const useMobilecoindConfigs = (): UseMobilecoindConfigs => {
  const initialLeaveMobilecoindRunningStore = localStore.getLeaveMobilecoindRunning();
  const initialLeaveMobilecoindRunningState = initialLeaveMobilecoindRunningStore === true; // This coerces initial state of null to false
  const [leaveMobilecoindRunning, setLeaveMobilecoindRunning] = useState(
    initialLeaveMobilecoindRunningState
  );

  const toggleLeaveMobilecoindRunning = () => {
    const previousLeaveMobilecoindRunningState = localStore.getLeaveMobilecoindRunning();
    const newLeaveMobilecoindRunningState = !previousLeaveMobilecoindRunningState;
    localStore.setLeaveMobilecoindRunning(newLeaveMobilecoindRunningState);

    setLeaveMobilecoindRunning(newLeaveMobilecoindRunningState);
  };

  // Paths
  const ledgerDbPath = localStore.getLedgerDbPath();
  const mobilecoindDbPath = localStore.getMobilecoindDbPath();

  return {
    leaveMobilecoindRunning,
    ledgerDbPath,
    mobilecoindDbPath,
    toggleLeaveMobilecoindRunning,
  };
};

export default useMobilecoindConfigs;
