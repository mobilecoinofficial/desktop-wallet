import React from 'react';
import type { FC } from 'react';

import {
  Box, Container, Typography, makeStyles,
} from '@material-ui/core';

import SendMobForm from './SendMobForm';

const useStyles = makeStyles(() => {
  return {
    cardContainer: {
      paddingBottom: 64,
      paddingTop: 64,
    },
  };
});

// TODO -- we need PENDING STATUS for payments in MobileCoinD
const SendMobPanel: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        mb={3}
      >
        <Box>
          <Typography variant="body2" color="textSecondary">
            Please enter the amount of MOB you want to send and the public
            address of the recipient.
          </Typography>
        </Box>
      </Box>
      <Box flexGrow={1} mt={3}>
        <SendMobForm />
      </Box>
    </Container>
  );
};

export default SendMobPanel;
