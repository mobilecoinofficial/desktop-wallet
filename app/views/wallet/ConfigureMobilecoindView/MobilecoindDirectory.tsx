import React from 'react';
import type { FC } from 'react';

import { Box, FormLabel, Typography } from '@material-ui/core';

import useMobilecoindConfigs from '../../../hooks/useMobilecoindConfigs';

const MobilecoindDirectory: FC = () => {
  const { ledgerDbPath, mobilecoindDbPath } = useMobilecoindConfigs();

  return (
    <Box flexGrow={1} mt={3}>
      <Box pt={3}>
        <FormLabel component="legend">
          <Typography color="primary">MobileCoinD Directory</Typography>
        </FormLabel>
      </Box>
      <Box pt={2}>
        <Box py={1} />
        <Typography variant="body2" color="textPrimary">
          Ledger Database Path:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${ledgerDbPath}`}
        </Typography>
        <Box py={1} />
        <Typography variant="body2" color="textPrimary">
          MobileCoinD Database Path:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${mobilecoindDbPath}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default MobilecoindDirectory;
