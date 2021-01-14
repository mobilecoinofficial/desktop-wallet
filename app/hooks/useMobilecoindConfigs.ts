import { useState } from 'react';

import LocalStore from '../utils/LocalStore';

const useMobilecoindConfigs = () => {
  const LocalStoreInstance = new LocalStore();
  const initialLeaveMobilecoindRunningStore = LocalStoreInstance.getLeaveMobilecoindRunning();
  const initialLeaveMobilecoindRunningState = initialLeaveMobilecoindRunningStore === true; // This coerces initial state of null to false
  const [leaveMobilecoindRunning, setLeaveMobilecoindRunning] = useState(
    initialLeaveMobilecoindRunningState,
  );

  const toggleLeaveMobilecoindRunning = () => {
    const previousLeaveMobilecoindRunningState = LocalStoreInstance.getLeaveMobilecoindRunning();
    const newLeaveMobilecoindRunningState = !previousLeaveMobilecoindRunningState;
    LocalStoreInstance.setLeaveMobilecoindRunning(
      newLeaveMobilecoindRunningState,
    );

    setLeaveMobilecoindRunning(newLeaveMobilecoindRunningState);
  };

  // Paths
  const ledgerDbPath = LocalStoreInstance.getLedgerDbPath();
  const mobilecoindDbPath = LocalStoreInstance.getMobilecoindDbPath();

  return {
    leaveMobilecoindRunning,
    ledgerDbPath,
    mobilecoindDbPath,
    toggleLeaveMobilecoindRunning,
  };
};

export default useMobilecoindConfigs;
