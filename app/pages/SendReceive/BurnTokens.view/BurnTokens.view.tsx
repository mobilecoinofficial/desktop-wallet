import React, { useState, FC, ChangeEvent, useCallback } from 'react';

import {
  Box,
  Card,
  CardContent,
  Container,
  FormLabel,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import { TOKENS, Token } from '../../../constants/tokens';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import {
  convertMobStringToPicoMobString,
  convertPicoMobStringToMob,
  convertMicroEUSDToStringEUSD,
  convertEUSDStringToMicroEUSDString,
} from '../../../utils/convertMob';

const BurnTokens: FC = () => {
  const { t } = useTranslation('SendMobForm');
  const { fees, selectedAccount } = useSelector((state: ReduxStoreState) => state);
  const [amount, setAmount] = useState(0);
  const token = TOKENS.EUSD;
  const fee = fees[token.id];
  const feeAmount = convertMicroEUSDToStringEUSD(fee);
  const eUSDBalance = selectedAccount.balanceStatus.balancePerToken[token.id].unspentPmob;

  const handleAmountChange = (event: { target: { name: string; value: string } }) => {
    setAmount(Number(event.target.value));
  };

  //   const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
  //     event.target.select();
  //   };

  const renderInput = useCallback(
    (props) => <MOBNumberFormat token={token} convert={false} {...props} />,
    [token]
  );

  //   const validateAmount = (balance: bigint, txFee: bigint) => (valueString: string) => {
  //     console.log(balance, txFee, valueString);
  //     let error;
  //     const valueAsPicoMob = BigInt(valueString.replace('.', ''));
  //     if (valueAsPicoMob + txFee > balance) {
  //       // TODO - probably want to replace this before launch
  //       error = t('errorFee', { limit: Number(txFee) / token.precision, name: token.name });
  //     }
  //     return error;
  //   };

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
              />
            </form>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BurnTokens;
export { BurnTokens };

{
  /* <MOBNumberFormat value={amount} onChange={handleAmountChange} token={token} />; */
}

{
  /* <Field
component={TextField}
fullWidth
label="Amount"
margin="normal"
name="amount"
id="amount"
type="text"
// value={values.amount}
onFocus={handleSelect}
validate={validateAmount(
  BigInt(Number(eUSDBalance)),
  BigInt(Number(feeAmount) * token.precision)
)}
InputProps={{
  inputComponent: renderInput,
  startAdornment: (
    <InputAdornment position="start">
      {token.icon({ height: 20, width: 20 })}
    </InputAdornment>
  ),
}}
/> */
}
