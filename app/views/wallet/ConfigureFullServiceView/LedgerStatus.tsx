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
import { useTranslation } from 'react-i18next';

import useFullService from '../../../hooks/useFullService';
import getPercentSyncedNew from '../../../utils/getPercentSyncedNew';

const LedgerStatus: FC = () => {
  const { t } = useTranslation('LedgerStatus');
  const { selectedAccount } = useFullService();

  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
  const localBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.localBlockIndex);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);

  // TODO - check these types now
  const createData = (
    blockType: string,
    currentHeight: number | string | null,
    maxHeight: number | null,
    percentSynced: number | string | null
  ) => {
    return {
      blockType,
      currentHeight,
      maxHeight,
      percentSynced,
    };
  };

  const percentAccountSynced =
    networkBlockIndexBigInt < accountBlockIndexBigInt
      ? 'Error'
      : getPercentSyncedNew(networkBlockIndexBigInt, accountBlockIndexBigInt);

  const percentLocalSynced =
    networkBlockIndexBigInt < localBlockIndexBigInt ||
    localBlockIndexBigInt < accountBlockIndexBigInt
      ? 'Error'
      : getPercentSyncedNew(networkBlockIndexBigInt, localBlockIndexBigInt);

  const rows = [
    createData(t('networkBlocks'), '', Number(networkBlockIndexBigInt), ''),
    createData(
      t('localBlocks'),
      Number(localBlockIndexBigInt),
      Number(networkBlockIndexBigInt),
      percentLocalSynced === 'Error' ? 'Error' : percentLocalSynced
    ),
    createData(
      t('accountBlocks'),
      Number(accountBlockIndexBigInt),
      Number(networkBlockIndexBigInt),
      percentAccountSynced === 'Error' ? 'Error' : percentAccountSynced
    ),
  ];

  let statusCopy;
  if (percentAccountSynced === 'Error' || percentLocalSynced === 'Error') {
    statusCopy = t('statusCopyError');
  } else if (percentAccountSynced < 90) {
    statusCopy = t('statusCopyBelow90');
  } else if (percentAccountSynced < 100) {
    statusCopy = t('statusCopyAbove90');
  } else {
    statusCopy = t('statusCopy100');
  }
  return (
    <Box flexGrow={1} mt={3}>
      <Box pt={3}>
        <FormLabel component="legend">
          <Typography color="primary">{t('formLabel')}</Typography>
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
                <TableCell>{t('blockType')}</TableCell>
                <TableCell align="right">{t('height')}</TableCell>
                <TableCell align="right">{t('maxHeight')}</TableCell>
                <TableCell align="right">{t('synced')}</TableCell>
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
        {t('networkBlocksDescription')}
      </Typography>
      <Box py={1} />
      <Typography variant="body2" color="textSecondary">
        {t('localBlocksDescription')}
      </Typography>
      <Box py={1} />
      <Typography variant="body2" color="textSecondary">
        {t('accountBlocksDescription')}
      </Typography>
    </Box>
  );
};

export default LedgerStatus;
