import React from 'react';
import type { FC } from 'react';

import {
  Box,
  FormLabel,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import useMobileCoinD from '../../../hooks/useMobileCoinD';
import getPercentSynced from '../../../utils/getPercentSynced';

const LedgerStatus: FC = () => {
  const {
    localBlockIndex,
    networkHighestBlockIndex,
    nextBlock,
  } = useMobileCoinD();

  const localBlockIndexInt = parseInt(localBlockIndex || '0', 10);
  const networkHighestBlockIndexInt = parseInt(
    networkHighestBlockIndex || '0',
    10,
  );
  const nextBlockInt = parseInt(nextBlock || '0', 10);

  const createData = (
    blockType: string,
    currentHeight: number | string | null,
    maxHeight: number | null,
    percentSynced: number | string | null,
  ) => {
    return {
      blockType, currentHeight, maxHeight, percentSynced,
    };
  };

  const percentMonitorSynced = networkHighestBlockIndexInt === null
    || nextBlockInt === null
    || networkHighestBlockIndexInt < 0
    || nextBlockInt < 0
    || nextBlockInt - 1 > networkHighestBlockIndexInt
    ? 'Error'
    : getPercentSynced(
      networkHighestBlockIndexInt,
      nextBlockInt,
      'nextBlock',
    );

  const percentLocalSynced = networkHighestBlockIndexInt === null
    || localBlockIndexInt === null
    || networkHighestBlockIndexInt < 0
    || localBlockIndexInt < 0
    || localBlockIndexInt > networkHighestBlockIndexInt
    ? 'Error'
    : getPercentSynced(
      networkHighestBlockIndexInt,
      localBlockIndexInt,
      'localBlockIndex',
    );

  const rows = [
    createData('Network Blocks', '', networkHighestBlockIndexInt, ''),
    createData(
      'Local Blocks',
      localBlockIndexInt,
      networkHighestBlockIndexInt,
      percentLocalSynced,
    ),
    createData(
      'Monitor Blocks',
      localBlockIndexInt,
      networkHighestBlockIndexInt,
      percentMonitorSynced,
    ),
  ];

  let statusCopy;
  if (percentMonitorSynced === 'Error' || percentLocalSynced === 'Error') {
    statusCopy = "There's been an error in the ledger. Please reset the ledger at the bottom of this page.";
  } else if (percentMonitorSynced < 90) {
    statusCopy = 'The ledger is syncing. This may take awhile.';
  } else if (percentMonitorSynced < 100) {
    statusCopy = 'The ledger is syncing.';
  } else {
    statusCopy = 'The ledger is synced.';
  }
  return (
    <Box flexGrow={1} mt={3}>
      <Box pt={3}>
        <FormLabel component="legend">
          <Typography color="primary">Ledger Status</Typography>
        </FormLabel>
      </Box>
      <Box pt={2}>
        <Typography variant="body2" display="inline" color="textPrimary">
          {statusCopy}
        </Typography>
      </Box>
      <Box py={2}>
        <TableContainer>
          <Table size="small" aria-label="block status">
            <TableHead component={Paper}>
              <TableRow>
                <TableCell>Block Type</TableCell>
                <TableCell align="right">Current Height</TableCell>
                <TableCell align="right">Maximum Height</TableCell>
                <TableCell align="right">% Synced</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow key={row.blockType}>
                    <TableCell component="th" scope="row">
                      {row.blockType}
                    </TableCell>
                    <TableCell align="right">{row.currentHeight}</TableCell>
                    <TableCell align="right">{row.maxHeight}</TableCell>
                    <TableCell align="right">{row.percentSynced}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Typography variant="body2" color="textSecondary">
        Network Blocks represent the total blocks within the MobileCoin network.
        This is the value your Local and Monitor Blocks needs to hit to be 100%
        synced.
      </Typography>
      <Box py={1} />
      <Typography variant="body2" color="textSecondary">
        Local Blocks shows the blocks your mobilecoind has synced the ledger.
      </Typography>
      <Box py={1} />
      <Typography variant="body2" color="textSecondary">
        Monitor Blocks shows the blocks that a specific monitor has synced. Each
        account has its own Monitor Blocks count. Once this value is synced, you
        will immediately see the effects of transactions.
      </Typography>
    </Box>
  );
};

export default LedgerStatus;
