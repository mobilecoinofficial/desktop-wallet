import React, { FC } from 'react';

import { Box, Button, Dialog, makeStyles, Typography } from '@material-ui/core';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { useSelector } from 'react-redux';

import { MOBNumberFormat } from '../../../components';
import { LongCode } from '../../../components/LongCode';
import { useCurrentToken } from '../../../hooks/useCurrentToken';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import type { Theme } from '../../../theme';

type BurnConfirmationProps = {
  amount: number;
  closeDialog: () => void;
  open: boolean;
  submitBurn: () => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  button: { width: 200 },
  center: { display: 'flex', justifyContent: 'center' },
  code: {
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: '.70rem',
    marginRight: '-.70rem',
    padding: theme.spacing(1),
  },
  form: { paddingBottom: theme.spacing(2) },
  formControlLabelRoot: { marginRight: 0 },
  label: { width: '100%' },
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
  },
  paper: {
    margin: '2rem',
    maxHeight: '-webkit-fill-available',
    maxWidth: 800,
    overflow: 'auto',
  },
}));

export const BurnConfirmation: FC<BurnConfirmationProps> = ({
  amount,
  closeDialog,
  open,
  submitBurn,
}: BurnConfirmationProps) => {
  const classes = useStyles();
  const { fees, selectedAccount } = useSelector((state: ReduxStoreState) => state);
  const token = useCurrentToken();
  const fee = Number(fees[token.id]);
  const balance = Number(selectedAccount.balanceStatus.balancePerToken[token.id].unspentPmob);

  return (
    <Dialog open={open} onClose={closeDialog} PaperProps={{ style: { width: '100%' } }}>
      <Box className={classes.paper}>
        <Typography color="textPrimary" variant="h2">
          Burn Confirmation
        </Typography>
        <Typography color="textPrimary" align="left">
          Please check and confirm the burn details
        </Typography>
        <br />
        <Box display="flex" justifyContent="space-between">
          <Typography color="textPrimary">Account Balance:</Typography>
          <Typography color="textPrimary">
            <MOBNumberFormat suffix={` ${token.name}`} token={token} value={balance.toString()} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography color="textPrimary">---</Typography>
          <Typography color="textPrimary">---</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography color="primary">Amount:</Typography>
          <Typography color="primary">
            <MOBNumberFormat
              suffix={` ${token.name}`}
              token={token}
              value={(amount * token.precision).toString()}
            />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography color="textPrimary">Fee:</Typography>
          <Typography color="textPrimary">
            <MOBNumberFormat suffix={` ${token.name}`} token={token} value={fee.toString()} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography color="textPrimary">Total:</Typography>
          <Typography color="textPrimary">
            <MOBNumberFormat
              suffix={` ${token.name}`}
              token={token}
              value={(fee + amount * token.precision).toString()}
            />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography color="textPrimary">---</Typography>
          <Typography color="textPrimary">---</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography color="primary">Remaining:</Typography>
          <Typography color="primary">
            <MOBNumberFormat
              suffix={` ${token.name}`}
              token={token}
              value={(balance - (fee + amount * token.precision)).toString() as string}
            />
          </Typography>
        </Box>
        <br />
        <Box display="flex">
          <Box width="50%" padding="1rem" justifyContent="center">
            {selectedAccount.account.name && (
              <Typography color="textPrimary" className={classes.center}>
                Account name: {selectedAccount.account.name}
              </Typography>
            )}
            <Typography color="textPrimary" className={classes.center}>
              Account Address
            </Typography>
            <LongCode code={selectedAccount.account.mainAddress} codeClass={classes.code} />
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="1rem"
            flexDirection="column"
          >
            <ReportProblemOutlinedIcon
              color="error"
              style={{ height: '72px', marginBottom: '8px', width: '72px' }}
            />
            <Typography align="center">
              {((fee + amount * token.precision) / token.precision).toString()} eUSD will be
              permanently destroyed
            </Typography>
          </Box>
        </Box>
        <br />
        <Box display="flex" justifyContent="space-around" padding=".5em 0">
          <Button
            id="cancelSend"
            className={classes.button}
            color="secondary"
            // TODO do anything else on close?
            onClick={closeDialog}
            size="large"
            fullWidth
            type="submit"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            id="submitSend"
            className={classes.button}
            color="secondary"
            fullWidth
            onClick={submitBurn}
            size="large"
            type="submit"
            variant="contained"
          >
            Confirm Burn
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
