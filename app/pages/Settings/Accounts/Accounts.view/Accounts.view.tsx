import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Typography,
  makeStyles,
  Button,
  Grid,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../../theme';
import { AccountItem } from '../AccountItem.view';
import { AccountsViewProps } from './Accounts';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 200,
  },
  cardContainer: {
    paddingBottom: 64,
    paddingTop: 8 * 4,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    padding: theme.spacing(4),
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  code: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: '.70rem',
    marginRight: '-.70rem',
    padding: theme.spacing(1),
  },
  form: {
    paddingBottom: theme.spacing(2),
  },
  label: {
    width: '100%',
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
}));

const AccountsView: FC<AccountsViewProps> = ({
  accounts,
  deleteAccount,
  onClickBack,
  selectAccount,
  selectedAccount,
}: AccountsViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('ChangePasswordView');
  const [firstToShow, setFirstToShow] = useState(0);

  const pageBack = () => setFirstToShow(firstToShow - 5);
  const pageForward = () => setFirstToShow(firstToShow + 5);

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link color="inherit" onClick={onClickBack} component="button">
          <Typography color="textSecondary">{t('settingsBreadcrumb')}</Typography>
        </Link>
        <Typography color="textPrimary">Accounts</Typography>
      </Breadcrumbs>
      <Grid container spacing={3}>
        {accounts.accountIds
          .filter((_v, i) => firstToShow <= i && i < firstToShow + 5)
          .map((accountId) => (
            <AccountItem
              key={accountId}
              account={accounts.accountMap[accountId]}
              onClick={() => selectAccount(accountId)}
              onDelete={() => deleteAccount(accountId)}
              selected={selectedAccount.account.accountId === accountId}
            />
          ))}
        <Box width="100%" display="flex" justifyContent="flex-end" m={2}>
          {firstToShow > 0 ? (
            <Button
              onClick={pageBack}
              style={{ margin: '5px' }}
              color="primary"
              variant="contained"
            >
              &lt;
            </Button>
          ) : null}
          {firstToShow + 5 < accounts.accountIds.length ? (
            <Button
              onClick={pageForward}
              style={{ margin: '5px' }}
              color="primary"
              variant="contained"
            >
              &gt;
            </Button>
          ) : null}
        </Box>
      </Grid>
    </Container>
  );
};

export default AccountsView;
export { AccountsView };
