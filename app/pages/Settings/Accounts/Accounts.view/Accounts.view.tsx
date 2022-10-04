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
  Fab,
  Dialog,
} from '@material-ui/core';
import { clipboard } from 'electron';
import { useTranslation } from 'react-i18next';

import { getViewOnlyAccountImportRequest } from '../../../../fullService/api';
import type { Theme } from '../../../../theme';
import { AccountItem } from '../AccountItem.view';
import { DeleteAccountConfirmationView } from '../DeleteAccountConfirmation.view';
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
  fab: {
    margin: '10px auto',
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
  onClickAddAccount,
  onClickBack,
  selectAccount,
  selectedAccount,
}: AccountsViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('AccountsView');
  const [firstToShow, setFirstToShow] = useState(0);
  const [showDeleteAccountConfirmation, setShowDeleteAccountConfirmation] = useState(false);
  const [accountIdToDelete, setAccountIdToDelete] = useState('');
  const [accountShortCodeToDelete, setAccountShortCodeToDelete] = useState('');

  const pageBack = () => setFirstToShow(firstToShow - 5);
  const pageForward = () => setFirstToShow(firstToShow + 5);

  const getViewOnlyImport = async () => {
    const response = await getViewOnlyAccountImportRequest({
      accountId: selectedAccount.account.accountId,
    });
    clipboard.writeText(JSON.stringify(response));
  };

  const handleOpenDeleteAccountConfirmation = (accountId: string) => {
    setAccountIdToDelete(accountId);
    const { mainAddress } = accounts.accountMap[accountId];
    const shortCode = `${mainAddress.substring(0, 4)}-${mainAddress.substring(
      mainAddress.length - 4
    )}`;
    setAccountShortCodeToDelete(shortCode);
    setShowDeleteAccountConfirmation(true);
  };

  const handleDeleteAccount = () => {
    deleteAccount(accountIdToDelete);
    setShowDeleteAccountConfirmation(false);
  };

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
              onClickExport={getViewOnlyImport}
              onDelete={() => handleOpenDeleteAccountConfirmation(accountId)}
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
        <Fab color="primary" size="medium" className={classes.fab} onClick={onClickAddAccount}>
          +
        </Fab>
      </Grid>
      <Dialog
        open={showDeleteAccountConfirmation}
        onClose={() => setShowDeleteAccountConfirmation(false)}
      >
        <DeleteAccountConfirmationView
          confirm={handleDeleteAccount}
          cancel={() => setShowDeleteAccountConfirmation(false)}
          shortCode={accountShortCodeToDelete}
        />
      </Dialog>
    </Container>
  );
};

export default AccountsView;
export { AccountsView };
