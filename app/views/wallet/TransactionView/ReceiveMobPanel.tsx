import React from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles, Typography } from '@material-ui/core';

import AccountCard from '../../../components/AccountCard';
import useMobileCoinD from '../../../hooks/useMobileCoinD';
import type { Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => {
  return {
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
  };
});

const ReceiveMobPanel: FC = () => {
  const { accountName, b58Code, mobUrl } = useMobileCoinD();
  const classes = useStyles();

  // TODO - we should add a global modal request for bug reporting.
  // Esp for unexpected states like this. (unless I am misundering mobilecoind)
  if (b58Code === null || mobUrl === null) {
    return <></>;
  }

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
        <AccountCard account={{ b58Code, mobUrl, name: accountName }} />
      </Box>
    </Container>
  );
};

export default ReceiveMobPanel;
