import React from 'react';
import type { FC } from 'react';

import {
  Box, Container, Typography, makeStyles,
} from '@material-ui/core';

import { MOBNumberFormat } from '../../../../components';
import { MOBIcon } from '../../../../components/icons';
import useMobileCoinD from '../../../../hooks/useMobileCoinD';
import ConsumeGiftForm from './ConsumeGiftForm';

const useStyles = makeStyles(() => {
  return {
    mobContainer: {
      alignSelf: 'center',
      display: 'flex',
      paddingRight: 4,
    },
    root: {},
    valueContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
  };
});

const BuildGiftPanel: FC = () => {
  const classes = useStyles();
  const { balance, networkHighestBlockIndex, nextBlock } = useMobileCoinD();
  // TODO consolidate the isSynced logic throughout app to one location.
  // consider using a specifc context when we split the MobileCoinDContext
  const isSynced = nextBlock === null || networkHighestBlockIndex === null
    ? false
    : nextBlock - networkHighestBlockIndex < 2;

  return (
    <Container className={classes.root} maxWidth="sm">
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        mb={3}
      >
        <Box width="100%">
          <Box
            py={3.8}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              component="h2"
              gutterBottom
              variant="overline"
              color="textSecondary"
            >
              Balance
            </Typography>
            <Box className={classes.valueContainer}>
              <Box className={classes.mobContainer}>
                <MOBIcon height={20} width={20} />
              </Box>
              <Typography variant="h3" color="textPrimary">
                <MOBNumberFormat
                  valueUnit="pMOB"
                  value={balance?.toString() || ''}
                />
              </Typography>
            </Box>
            {!isSynced && (
              <Typography variant="h6" color="primary">
                Balance may be out-of-date while wallet syncs with ledger.
              </Typography>
            )}
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary">
              You may use this form to collect gift codes. Simply enter the Gift
              Code and confirm you want to consume the gift into your wallet.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box flexGrow={1} mt={3}>
        <ConsumeGiftForm />
      </Box>
    </Container>
  );
};

export default BuildGiftPanel;
