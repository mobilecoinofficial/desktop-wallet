import React, { useState, FC, useCallback } from 'react';

import {
  Box,
  Card,
  CardContent,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import { TOKENS } from '../../../constants/tokens';
import { buildBurnTransaction, submitTransaction } from '../../../fullService/api';
import { useCurrentToken } from '../../../hooks/useCurrentToken';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { TxProposal } from '../../../types';
import { errorToString } from '../../../utils/errorHandler';
import { BurnConfirmation } from './confirmation';

const BurnTokens: FC = () => {
  const [amount, setAmount] = useState(0);
  const [amountError, setAmountError] = useState<string | null>(null);
  const [memo, setMemo] = useState('');
  const [memoError, setMemoError] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [burnTx, setBurnTx] = useState<TxProposal | null>(null);

  const { enqueueSnackbar } = useSnackbar();
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
    // this shouldn't happen because the submit button is disabled if no burn
    // tx proposal is set, but putting it here to make the types happy
    if (!burnTx) {
      enqueueSnackbar('no burn transaction proposal available', { variant: 'error' });
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
      const errorMessage = errorToString(err);
      enqueueSnackbar(errorMessage, { variant: 'error' });
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
      <BurnConfirmation
        amount={amount}
        closeDialog={() => setShowConfirm(false)}
        open={showConfirm}
        submitBurn={handleSubmitBurn}
        enableSubmit={Boolean(burnTx)}
      />
    </Container>
  );
};

export default BurnTokens;
export { BurnTokens };
