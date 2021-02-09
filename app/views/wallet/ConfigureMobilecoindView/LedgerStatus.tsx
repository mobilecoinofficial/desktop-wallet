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

import useMobileCoinD from '../../../hooks/useMobileCoinD';
import getPercentSynced from '../../../utils/getPercentSynced';

const LedgerStatus: FC = () => {
  const { localBlockIndex, networkHighestBlockIndex, nextBlock } = useMobileCoinD();

  const { t } = useTranslation('LedgerStatus');

  const localBlockIndexInt = parseInt(localBlockIndex || '0', 10);
  const networkHighestBlockIndexInt = parseInt(networkHighestBlockIndex || '0', 10);
  const nextBlockInt = parseInt(nextBlock || '0', 10);

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

  const percentMonitorSynced =
    networkHighestBlockIndexInt === null ||
    nextBlockInt === null ||
    networkHighestBlockIndexInt < 0 ||
    nextBlockInt < 0 ||
    nextBlockInt - 1 > networkHighestBlockIndexInt
      ? 'Error'
      : getPercentSynced(networkHighestBlockIndexInt, nextBlockInt, 'nextBlock');

  const percentLocalSynced =
    networkHighestBlockIndexInt === null ||
    localBlockIndexInt === null ||
    networkHighestBlockIndexInt < 0 ||
    localBlockIndexInt < 0 ||
    localBlockIndexInt > networkHighestBlockIndexInt
      ? 'Error'
      : getPercentSynced(networkHighestBlockIndexInt, localBlockIndexInt, 'localBlockIndex');

  const rows = [
    createData(t('networkBlocks'), '', networkHighestBlockIndexInt, ''),
    createData(
      t('localBlocks'),
      localBlockIndexInt,
      networkHighestBlockIndexInt,
      percentLocalSynced
    ),
    createData(
      t('monitorBlocks'),
      localBlockIndexInt,
      networkHighestBlockIndexInt,
      percentMonitorSynced
    ),
  ];

  let statusCopy;
  if (percentMonitorSynced === 'Error' || percentLocalSynced === 'Error') {
    statusCopy = t('statusCopyError');
  } else if (percentMonitorSynced < 90) {
    statusCopy = t('statusCopyBelow90');
  } else if (percentMonitorSynced < 100) {
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
        {t('monitorBlocksDescription')}
      </Typography>
    </Box>
  );
};

export default LedgerStatus;
