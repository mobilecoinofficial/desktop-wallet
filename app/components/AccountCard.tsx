import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Tooltip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';

import type { Theme } from '../theme';
import type Account from '../types/Account';
import LongCode from './LongCode';
import QRMob from './QRMob';
import ShortCode from './ShortCode';
import { CodeTextIcon, LogoIcon, QRCodeIcon } from './icons';

const { clipboard } = require('electron');

interface AccountCardProps {
  account: Account;
  className?: string;
  isGift?: boolean;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    code: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      fontSize: 24,
      letterSpacing: '.70rem',
      marginRight: '-.70rem',
      padding: theme.spacing(1),
    },
    container: {
      padding: '20px 0 0',
    },
    corners: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    root: {
      padding: '0 10px',
    },
  };
});

const AccountCard: FC<AccountCardProps> = ({
  className,
  account,
  isGift,
  ...rest
}: AccountCardProps) => {
  const [isQRCode, setIsQRCode] = useState(false);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const { b58Code, mobUrl, name } = account;

  const handleCodeClick = (code: string) => {
    return () => {
      clipboard.writeText(code);
      enqueueSnackbar(
        isGift
          ? 'Gift Code copied to clipboard!'
          : 'Address Code copied to clipboard!',
        {
          variant: 'success',
        },
      );
    };
  };

  const handleToggleClick = () => {
    setIsQRCode(!isQRCode);
  };

  let headerString = '';
  if (isQRCode) {
    headerString = isGift ? 'Gift QR Code' : 'Account QR Code';
  } else {
    headerString = isGift ? 'Gift Code' : 'Account Address Code';
  }

  return (
    <Container className={classes.container} fixed maxWidth="sm">
      <Card
        data-testid="account-card"
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
          >
            <Box className={classes.corners}>
              <LogoIcon />
              <Tooltip
                title={
                  isQRCode ? 'Show Account Address Code' : 'Show MobURL QR Code'
                }
                placement="right"
                arrow
              >
                <IconButton
                  data-testid="account-card-toggle"
                  color="inherit"
                  edge="start"
                  onClick={handleToggleClick}
                >
                  {isQRCode ? <CodeTextIcon /> : <QRCodeIcon />}
                </IconButton>
              </Tooltip>
            </Box>
            <Typography color="textSecondary">{headerString}</Typography>
            <Typography
              data-testid="account-card-center"
              color="textPrimary"
              gutterBottom
              variant="h3"
            >
              {isQRCode ? (
                <QRMob
                  data-testid="account-card-qr-code"
                  size={280}
                  value={mobUrl}
                />
              ) : (
                <Tooltip
                  title="Click to copy to clipboard."
                  placement="right"
                  arrow
                >
                  <Box
                    data-testid="account-card-tooltip"
                    onClick={handleCodeClick(b58Code)}
                  >
                    <LongCode
                      data-testid="account-card-long-code"
                      codeClass={classes.code}
                      code={b58Code}
                    />
                  </Box>
                </Tooltip>
              )}
            </Typography>
            <Box className={classes.corners}>
              <Typography
                data-testid="account-card-name"
                color="textSecondary"
                variant="h4"
              >
                {name || 'Unnamed Account'}
              </Typography>
              <Typography
                data-testid="account-card-short-code"
                color="textSecondary"
                variant="h4"
              >
                <ShortCode code={b58Code} />
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

AccountCard.defaultProps = {
  className: '',
  isGift: false,
};

export default AccountCard;
