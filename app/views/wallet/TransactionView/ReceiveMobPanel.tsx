import React from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles, Typography } from '@material-ui/core';

import AccountCard from '../../../components/AccountCard';
import useFullService from '../../../hooks/useFullService';
import type { Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    paddingBottom: 64,
    paddingTop: 64,
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const ReceiveMobPanel: FC = () => {
  const { selectedAccount } = useFullService();
  const classes = useStyles();

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
        <div>
          <Typography variant="body2" color="textSecondary">
            To receive MOB, you must share your public address code to the sender. The code is the
            text you see on your account card. Simply click the code to copy it to your clipboard.
            Alternatively, the sender can scan your account QR code. Press the QR code icon to
            switch views.
          </Typography>
        </div>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <AccountCard account={{
          b58Code: selectedAccount.account.mainAddress,
          mobUrl: selectedAccount.mobUrl,
          name: selectedAccount.account.name,
        }}
        />
      </Box>
    </Container>
  );
};

export default ReceiveMobPanel;
