import { useState } from 'react';

import LocalStore from '../utils/LocalStore';

interface UseMobilecoindConfigs {
  leaveMobilecoindRunning: boolean;
  ledgerDbPath: string;
  mobilecoindDbPath: string;
  toggleLeaveMobilecoindRunning: () => void;
}

const useMobilecoindConfigs = (): UseMobilecoindConfigs => {
  const LocalStoreInstance = new LocalStore();
  const initialLeaveMobilecoindRunningStore = LocalStoreInstance.getLeaveMobilecoindRunning();
  // This coerces initial state of null to false
  const initialLeaveMobilecoindRunningState = initialLeaveMobilecoindRunningStore === true;
  const [leaveMobilecoindRunning, setLeaveMobilecoindRunning] = useState(
    initialLeaveMobilecoindRunningState
  );

  const toggleLeaveMobilecoindRunning = () => {
    const previousLeaveMobilecoindRunningState = LocalStoreInstance.getLeaveMobilecoindRunning();
    const newLeaveMobilecoindRunningState = !previousLeaveMobilecoindRunningState;
    LocalStoreInstance.setLeaveMobilecoindRunning(newLeaveMobilecoindRunningState);

    setLeaveMobilecoindRunning(newLeaveMobilecoindRunningState);
  };

  // Paths
  const ledgerDbPath = LocalStoreInstance.getMobilecoindLedgerDbPath();
  const mobilecoindDbPath = LocalStoreInstance.getMobilecoindDbPath();

  return {
    leaveMobilecoindRunning,
    ledgerDbPath,
    mobilecoindDbPath,
    toggleLeaveMobilecoindRunning,
  };
};

export default useMobilecoindConfigs;
