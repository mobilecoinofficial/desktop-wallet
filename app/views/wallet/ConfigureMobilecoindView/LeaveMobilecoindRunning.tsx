import React from 'react';
import type { FC } from 'react';

import {
  Box, FormLabel, Typography, Switch,
} from '@material-ui/core';

import useMobilecoindConfigs from '../../../hooks/useMobilecoindConfigs';

const LeaveMobilecoindRunning: FC = () => {
  const {
    leaveMobilecoindRunning,
    toggleLeaveMobilecoindRunning,
  } = useMobilecoindConfigs();

  return (
    <Box flexGrow={1} mt={3}>
      <Box pt={2}>
        <FormLabel component="legend">
          <Typography color="primary">
            MobileCoinD Background Process
          </Typography>
        </FormLabel>
      </Box>
      <Box pt={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="body2"
            color={leaveMobilecoindRunning ? 'textPrimary' : 'textSecondary'}
          >
            {leaveMobilecoindRunning
              ? 'Leave MobileCoinD Active is on'
              : 'Leave MobileCoinD Active is off'}
          </Typography>
          <Box>
            <Switch
              checked={leaveMobilecoindRunning}
              onChange={toggleLeaveMobilecoindRunning}
              name="checkedC"
            />
          </Box>
        </Box>
        <Typography
          variant="body2"
          display="inline"
          color={leaveMobilecoindRunning ? 'textPrimary' : 'textSecondary'}
        >
          {leaveMobilecoindRunning
            ? 'MobileCoinD will continue to sync when you exit the wallet.'
            : 'MobileCoinD will not continue to sync when you exit the wallet.'}
        </Typography>
        <Box py={1} />
        <Typography variant="body2" color="textSecondary">
          By default, MobileCoinD terminates when you exit the wallet. This
          setting allows you to leave MobileCoinD syncing as a background
          process. It is best to keep the ledger synced to avoid delays in
          transactions or balance fetches.
        </Typography>
      </Box>
    </Box>
  );
};

export default LeaveMobilecoindRunning;
