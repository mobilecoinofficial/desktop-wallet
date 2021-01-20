import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import routePaths from '../../../constants/routePaths';
import type { Theme } from '../../../theme';
import LeaveMobilecoindRunning from './LeaveMobilecoindRunning';
import LedgerStatus from './LedgerStatus';
import MobilecoindDirectory from './MobilecoindDirectory';
import ResetLedger from './ResetLedger';

const useStyles = makeStyles((theme: Theme) => {
  return {
    cardContainer: {
      paddingBottom: 64,
      paddingTop: 8 * 4,
    },
    modal: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      backgroundColor: theme.palette.background.dark,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  };
});

const ConfigureMobilecoindView: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link
          color="inherit"
          to={routePaths.APP_SETTINGS}
          component={RouterLink}
        >
          <Typography color="textSecondary">Settings</Typography>
        </Link>
        <Typography color="textPrimary">Configure MobileCoinD</Typography>
      </Breadcrumbs>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        my={3}
        flexDirection="column"
      >
        <Typography variant="body2" display="inline" color="textSecondary">
          This panel allows you to customize the behavior of MobileCoinD as well
          as perform some basic resets.
        </Typography>
        <Box py={1} />
        <Typography variant="body2" color="textSecondary">
          The MobileCoin Daemon, or MobileCoinD, is a standalone executable
          which provides blockchain synchronization and wallet services.
        </Typography>
        <Box py={1} />
        <Typography variant="body2" color="textSecondary">
          It creates encrypted, attested connections to validator nodes who are
          participating in federated voting in order to get the current block
          height, block headers, and to submit transactions. These validator
          nodes are considered highly trusted due to their use of SGX, and they
          are used as a reliable source for block information as well as to
          validate and process the proposed transactions from MobileCoinD.
        </Typography>
      </Box>
      <LedgerStatus />
      <LeaveMobilecoindRunning />
      <ResetLedger />
      <MobilecoindDirectory />
    </Container>
  );
};

export default ConfigureMobilecoindView;
