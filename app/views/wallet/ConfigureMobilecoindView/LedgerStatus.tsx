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

import useFullService from '../../../hooks/useFullService';
import getPercentSyncedNew from '../../../utils/getPercentSyncedNew';

const LedgerStatus: FC = () => {
  const { selectedAccount } = useFullService();

  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
  const localBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.localBlockIndex);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);

  // TODO - check these types now
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

  const percentAccountSynced = networkBlockIndexBigInt < accountBlockIndexBigInt
    ? 'Error'
    : getPercentSyncedNew(
      networkBlockIndexBigInt,
      accountBlockIndexBigInt,
    );

  const percentLocalSynced = networkBlockIndexBigInt < localBlockIndexBigInt
    || localBlockIndexBigInt < accountBlockIndexBigInt
    ? 'Error'
    : getPercentSyncedNew(
      networkBlockIndexBigInt,
      localBlockIndexBigInt,
    );

  const rows = [
    createData('Network Blocks', '', Number(networkBlockIndexBigInt), ''),
    createData(
      'Local Blocks',
      Number(localBlockIndexBigInt),
      Number(networkBlockIndexBigInt),
      percentLocalSynced === 'Error' ? 'Error' : percentLocalSynced,
    ),
    createData(
      'Account Blocks',
      Number(accountBlockIndexBigInt),
      Number(networkBlockIndexBigInt),
      percentAccountSynced === 'Error' ? 'Error' : percentAccountSynced,
    ),
  ];

  let statusCopy;
  if (percentAccountSynced === 'Error' || percentLocalSynced === 'Error') {
    statusCopy = "There's been an error in the ledger. Please reset the ledger at the bottom of this page.";
  } else if (percentAccountSynced < 90) {
    statusCopy = 'The ledger is syncing. This may take awhile.';
  } else if (percentAccountSynced < 100) {
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
        This is the value your Local and Account Blocks needs to hit to be 100%
        synced.
      </Typography>
      <Box py={1} />
      <Typography variant="body2" color="textSecondary">
        Local Blocks shows the local blocks your downloaded from the ledger.
      </Typography>
      <Box py={1} />
      <Typography variant="body2" color="textSecondary">
        Account Blocks shows the blocks that a specific Account has synced. Each
        account has its own Account Blocks count. Once this value is synced, you
        will immediately see the effects of transactions.
      </Typography>
    </Box>
  );
};

export default LedgerStatus;
