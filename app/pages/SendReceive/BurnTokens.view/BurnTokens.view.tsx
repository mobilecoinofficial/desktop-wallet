import React, { useState, FC, ChangeEvent, useCallback } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  FormLabel,
  Input,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { validateMnemonic } from 'bip39';
import { Formik, Form, Field } from 'formik';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import { LongCode } from '../../../components/LongCode';
import { TOKENS, Token } from '../../../constants/tokens';
import { buildBurnTransaction, submitTransaction } from '../../../fullService/api';
import { useCurrentToken } from '../../../hooks/useCurrentToken';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import type { Theme } from '../../../theme';
import { TxProposal } from '../../../types';
import {
  convertMobStringToPicoMobString,
  convertPicoMobStringToMob,
  convertMicroEUSDToStringEUSD,
  convertEUSDStringToMicroEUSDString,
} from '../../../utils/convertMob';
import { errorToString } from '../../../utils/errorHandler';

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

let tempMemoExample = '';
for (let i = 0; i < 128; i++) {
  tempMemoExample += '0';
}

const BurnTokens: FC = () => {
  const [amount, setAmount] = useState(0);
  const [amountError, setAmountError] = useState<string | null>(null);
  const [memo, setMemo] = useState(tempMemoExample);
  const [memoError, setMemoError] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [burnTx, setBurnTx] = useState<TxProposal | null>(null);

  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const { fees, selectedAccount } = useSelector((state: ReduxStoreState) => state);
  const token = useCurrentToken();
  const fee = Number(fees[token.id]);
  const balance = Number(selectedAccount.balanceStatus.balancePerToken[token.id].unspentPmob);
  const submitEnabled = amount > 0 && !amountError && memo.length && !memoError;

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(event.target.value);
    setAmount(newAmount);
    validateAmount(newAmount);
  };

  const validateAmount = (newAmount: number) => {
    const bigAmount = newAmount * token.precision;
    if (balance < bigAmount + fee) {
      setAmountError('eUSD amount must be less than account balance - fee (0.002560)');
    } else {
      setAmountError(null);
    }
  };

  const handleMemoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMemo = event.target.value;
    setMemo(event.target.value);
    validateMemo(newMemo);
  };

  const validateMemo = (mem: string) => {
    if (mem.length !== 128) {
      setMemoError('memo length must be 128 characters');
      // } else if (memo.slice(0, 4) !== '0x01') {
      //   setMemoError('memo should start with 0x01');
    } else {
      setMemoError(null);
    }
  };

  const handleClickBuild = async () => {
    try {
      const txProposal = await buildBurnTransaction({
        accountId: selectedAccount.account.accountId,
        amount: {
          tokenId: token.id.toString(),
          value: (amount * token.precision).toString(),
        },
        memo,
      });

      setBurnTx(txProposal);
      setShowConfirm(true);
    } catch (err) {
      const errorMessage = errorToString(err);
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  };

  const handleSubmitBurn = async () => {
    if (!burnTx) {
      // TODO handle this situation better
      return;
    }
    try {
      const { accountId } = selectedAccount.account;
      await submitTransaction({ accountId, txProposal: burnTx });
      setShowConfirm(false);
      enqueueSnackbar(`sucesffuly burned ${amount} ${token.name}!`, {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar('Error submitting transaction', { variant: 'error' });
    }
  };

  const renderInput = useCallback(
    (props) => <MOBNumberFormat token={token} convert={false} {...props} />,
    [token]
  );

  if (token.id === TOKENS.MOB.id) {
    return (
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography align="center">
          Burning is not avialable for MOB. Burning is only available for eUSD
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
            <Box>
              <Typography variant="body1" color="textPrimary">
                Burn eUSD
              </Typography>
              <Box p={1} />
              <Typography variant="body2" color="textSecondary">
                Burning eUSD will permenantly destroy it.
              </Typography>
            </Box>
          </Box>
          <Box flexGrow={1} mt={3}>
            <Box marginBottom={1} marginTop={6}>
              <Typography color="primary">Burn Details</Typography>
            </Box>
            <form>
              <TextField
                label="Amount"
                InputProps={{
                  inputComponent: renderInput,
                  startAdornment: (
                    <InputAdornment position="start">
                      {token.icon({ height: 20, width: 20 })}
                    </InputAdornment>
                  ),
                }}
                value={amount}
                onChange={handleAmountChange}
                fullWidth
                error={Boolean(amountError)}
                helperText={amountError}
              />
              <TextField
                label="Memo"
                onChange={handleMemoChange}
                fullWidth
                value={memo}
                multiline
                error={Boolean(memoError)}
                helperText={memoError}
                style={{ marginBottom: 8, marginTop: 8 }}
              />
              <SubmitButton
                disabled={!submitEnabled}
                onClick={handleClickBuild}
                isSubmitting={false}
              >
                Build Burn Transaction
              </SubmitButton>
            </form>
          </Box>
        </CardContent>
      </Card>
      <Dialog
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        PaperProps={{ style: { width: '100%' } }}
      >
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
              onClick={() => setShowConfirm(false)}
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
              onClick={handleSubmitBurn}
              size="large"
              type="submit"
              variant="contained"
            >
              Confirm Burn
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Container>
  );
};

export default BurnTokens;
export { BurnTokens };
