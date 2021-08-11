import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { selectAccount } from '../../services';
import type { Theme } from '../../theme';
import { LongCode } from '../LongCode';
import { QRMob } from '../QRMob';
import { ShortCode } from '../ShortCode';
import { CodeTextIcon, LogoIcon, QRCodeIcon } from '../icons';
import { AccountCardProps } from './AccountCard';

const useStyles = makeStyles((theme: Theme) => ({
  code: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 22,
    letterSpacing: '.65rem',
    marginRight: '-.65rem',
    padding: theme.spacing(1),
  },
  container: {
    padding: '0',
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
}));

const AccountCard: FC<AccountCardProps> = ({
  account,
  accounts,
  isGift,
  onAddAccount,
  onClickCode,
  ...rest
}: AccountCardProps) => {
  const [isQRCode, setIsQRCode] = useState(false);
  const classes = useStyles();
  const { t } = useTranslation('AccountCard');

  const { b58Code } = account;

  const mobUrl = `mob:///b58/${b58Code}`;

  const handleCodeClicked = () => {
    onClickCode(b58Code, isGift ? t('clipboardGift') : t('clipboardAddress'));
  };

  const handleToggleClick = () => {
    setIsQRCode(!isQRCode);
  };

  let headerString = '';
  if (isQRCode) {
    headerString = isGift ? t('giftQR') : t('accountQR');
  } else {
    headerString = isGift ? t('giftHeader') : t('accountHeader');
  }

  const handleAccountSelectChange = (event) => {
    selectAccount(event.target.value);
  };

  return (
    <Container className={classes.container} fixed maxWidth="sm">
      <Card data-testid="account-card" className={classes.root} {...rest}>
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            justifyContent="space-between"
            minHeight={400}
          >
            <Box className={classes.corners}>
              <LogoIcon />
              <Tooltip
                title={(isQRCode ? t('accountTooltip') : t('mobUrlTooltip')) as string}
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
                <QRMob data-testid="account-card-qr-code" size={280} value={mobUrl} />
              ) : (
                <Tooltip title={t('copyTooltip') as string} placement="right" arrow>
                  <Box data-testid="account-card-tooltip" onClick={handleCodeClicked}>
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
              <Box>
                {accounts === undefined ? (
                  <></>
                ) : (
                  <Select
                    labelId="account-select-label"
                    id="account-select"
                    value={account.accountId}
                    onChange={handleAccountSelectChange}
                  >
                    {accounts.accountIds.map((accountId: string) => (
                      <MenuItem value={accountId} key={accountId}>
                        {`${
                          accounts.accountMap[accountId].name ?? 'unnamed'
                        } - ${accountId.substring(0, 5)}`}
                      </MenuItem>
                    ))}
                  </Select>
                )}
                {onAddAccount === undefined ? <></> : <Button onClick={onAddAccount}>+</Button>}
              </Box>
              <Typography data-testid="account-card-short-code" color="textSecondary" variant="h4">
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
  isGift: false,
};

export default AccountCard;
export { AccountCard };
