import React from 'react';
import type { FC, ReactNode } from 'react';

import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import type { Theme } from '../../theme';
import ShowEntropyModal from './ShowEntropyModal';
import TopBar from './TopBar/index';

interface DashboardLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    content: {
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
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
      overflow: 'hidden',
      paddingTop: 160,
    },
  };
});

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TopBar />
      <Box className={classes.wrapper}>
        <Box className={classes.contentContainer}>
          <Box className={classes.content}>{children}</Box>
          <ShowEntropyModal />
        </Box>
      </Box>
    </Box>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
