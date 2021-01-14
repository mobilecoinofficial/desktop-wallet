import React from 'react';
import type { FC, ReactNode } from 'react';

import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import useFullService from '../../hooks/useFullService';
import type { Theme } from '../../theme';
import InactivityDetect from '../InactivityDetect';
import BalanceIndicator from './BalanceIndicator';
import OnboardingModal from './OnboardingModal';
import SyncStatus from './TopBar/SyncStatus';
import TopBar from './TopBar/index';

interface DashboardLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflowX: 'hidden',
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingTop: 72,
  },
}));

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { selectedAccount } = useFullService();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TopBar />
      <Box className={classes.wrapper}>
        <Box display="flex" flexDirection="column" p={3}>
          <SyncStatus />
          <BalanceIndicator
            balance={selectedAccount.balanceStatus.unspentPmob}
            isSynced={selectedAccount.balanceStatus.isSynced}
          />
        </Box>
        <Box className={classes.contentContainer}>
          <InactivityDetect />
          <Box className={classes.content}>{children}</Box>
          <OnboardingModal />
        </Box>
      </Box>
    </Box>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
