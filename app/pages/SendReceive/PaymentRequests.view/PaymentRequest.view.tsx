import React from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormHelperText,
  FormLabel,
  Slide,
  Modal,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import { LongCode } from '../../../components/LongCode';
import { useCurrentToken } from '../../../hooks/useCurrentToken';
import { checkB58PaymentRequest } from '../../../services/checkB58PaymentRequest.service';
import type { Theme } from '../../../theme';
import type { StringB58 } from '../../../types/SpecialStrings.d';
import { errorToString } from '../../../utils/errorHandler';
import { PaymentRequestProps } from './PaymentRequest.d';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 300,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  code: {
    alignItems: 'center',
    display: 'grid',
    flexDirection: 'column',
    letterSpacing: '.70rem',
    marginRight: '-.70rem',
    padding: theme.spacing(1),
  },
  form: {
    paddingBottom: theme.spacing(2),
  },
  formControlLabelRoot: {
    marginRight: 0,
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
    margin: '1rem',
    maxWidth: 800,
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
}));

const PaymentRequest: FC<PaymentRequestProps> = ({
  confirmation,
  fee,
  onClickCancel,
  onClickConfirm,
  selectedAccount,
  onClickViewPaymentRequest,
  enqueueSnackbar,
}: PaymentRequestProps) => {
  const classes = useStyles();
  const token = useCurrentToken();

  const handleCancel = onClickCancel;

  const handleViewPaymentRequest = async (b58Code: StringB58) => {
    try {
      const result = await checkB58PaymentRequest({ b58Code });
      if (result.error) {
        throw new Error(result.error);
      }
      const { publicAddressB58, value } = result;
      await onClickViewPaymentRequest({
        accountId: selectedAccount.account.accountId,
        fee,
        recipientPublicAddress: publicAddressB58,
        valuePmob: value,
      });
    } catch (error) {
      const errorMessage = errorToString(error);
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  };

  const mockMultipleAccounts: Array<{
    b58Code: string;
    balance: bigint;
    name: string | null;
  }> = [
    {
      b58Code: selectedAccount.account.mainAddress,
      balance: BigInt(selectedAccount.balanceStatus.balancePerToken[token.id].unspentPmob),
      name: selectedAccount.account.name,
    },
  ];

  return (
    <Formik
      initialValues={{
        paymentRequestCodeB58: '',
        senderPublicAddress: mockMultipleAccounts[0].b58Code,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        paymentRequestCodeB58: Yup.string().required('Valid request code required'),
      })}
      onSubmit={(values) => handleViewPaymentRequest(values.paymentRequestCodeB58)}
    >
      {({
        errors,
        isSubmitting,
        dirty,
        handleBlur,
        isValid,
        resetForm,
        setFieldValue,
        submitForm,
        values,
      }) => {
        const selectedBalance = BigInt(
          mockMultipleAccounts.find((account) => account.b58Code === values.senderPublicAddress)
            .balance
        );
        let remainingBalance;
        let totalSent = 0;
        if (confirmation.totalValueConfirmation && confirmation.feeConfirmation) {
          remainingBalance =
            selectedBalance - (confirmation.totalValueConfirmation + confirmation.feeConfirmation);
          totalSent = confirmation.totalValueConfirmation + confirmation.feeConfirmation;
        }

        return (
          <Container className={classes.root} maxWidth="sm">
            <Card>
              <CardContent>
                <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
                  <Box width="100%">
                    <Typography variant="body1" color="textPrimary">
                      View Payment Request
                    </Typography>
                    <Box p={1} />
                    <Typography variant="body2" color="textSecondary">
                      Enter a valid Payment Request code to view full details of the corresponding
                      request. After viewing details, accept or decline the request.
                    </Typography>
                  </Box>
                </Box>
                <Form>
                  <Box pt={4}>
                    <FormLabel component="legend">
                      <Typography color="primary">Payment Request Details</Typography>
                    </FormLabel>
                    <Field
                      component={TextField}
                      fullWidth
                      label="Payment Request Code"
                      margin="normal"
                      name="paymentRequestCodeB58"
                      id="paymentRequestCodeB58"
                      type="text"
                      onBlur={(event) => {
                        handleBlur(event);
                        setFieldValue('paymentRequestCodeB58', event.target.value.trim());
                      }}
                    />
                  </Box>
                  {errors.submit && (
                    <Box mt={3}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )}
                  <SubmitButton
                    disabled={!dirty || !isValid || isSubmitting}
                    onClick={submitForm}
                    isSubmitting={isSubmitting}
                  >
                    View Request
                  </SubmitButton>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={confirmation.txProposalReceiverB58Code !== ''}
                    onClose={handleCancel}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 1000,
                    }}
                    disableAutoFocus
                    disableEnforceFocus
                  >
                    <Slide
                      in={confirmation.txProposalReceiverB58Code !== ''}
                      timeout={{ enter: 0, exit: 0 }}
                    >
                      <Container className={classes.paper}>
                        <Typography
                          color="textPrimary"
                          variant="h1"
                          id="transition-modal-title"
                          gutterBottom
                          style={{ fontWeight: 'bold' }}
                        >
                          Payment Request Details
                        </Typography>
                        <Typography variant="subtitle2" color="textPrimary">
                          Confirm request details for submitting payment to the MOB address listed
                          below.
                        </Typography>
                        <Box py={1} />
                        <Box display="flex" justifyContent="space-around">
                          <Box textAlign="center">
                            <Typography color="textPrimary">Recipient Address</Typography>
                            <LongCode
                              code={confirmation.txProposalReceiverB58Code}
                              codeClass={classes.code}
                            />
                          </Box>
                          <Box alignSelf="center">
                            <Box display="flex" justifyContent="space-between">
                              <Typography color="primary" style={{ margin: ' 0px 10px 0px 0px' }}>
                                Amount:
                              </Typography>
                              <Typography color="primary">
                                <MOBNumberFormat
                                  suffix={` ${token.name}`}
                                  token={token}
                                  value={(confirmation?.totalValueConfirmation).toString()}
                                />
                              </Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                              <Typography color="textPrimary">---</Typography>
                              <Typography color="textPrimary">---</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                              <Typography color="textPrimary">Fee:</Typography>
                              <Typography color="textPrimary">
                                <MOBNumberFormat
                                  suffix={` ${token.name}`}
                                  token={token}
                                  value={fee}
                                />
                              </Typography>
                            </Box>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              py={1}
                              style={{
                                textDecoration: 'underline',
                                textDecorationColor: 'blue',
                                textDecorationThickness: '2px',
                                textUnderlinePosition: 'under',
                              }}
                            >
                              <Typography
                                color="textPrimary"
                                variant="h4"
                                style={{ margin: '0px 10px 0px 0px' }}
                              >
                                Total:
                              </Typography>
                              <Typography color="textPrimary" variant="h4">
                                <MOBNumberFormat
                                  suffix={` ${token.name}`}
                                  token={token}
                                  value={totalSent?.toString() as string}
                                />
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">---</Typography>
                          <Typography color="textPrimary">---</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">Account Balance:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat
                              suffix={` ${token.name}`}
                              token={token}
                              value={selectedBalance?.toString()}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="primary">Balance After Payment:</Typography>
                          <Typography color="primary">
                            <MOBNumberFormat
                              suffix={` ${token.name}`}
                              token={token}
                              value={remainingBalance?.toString() as string}
                            />
                          </Typography>
                        </Box>
                        <Box py={1} />
                        <Box display="flex" justifyContent="space-between">
                          <Button
                            className={classes.button}
                            color="secondary"
                            onClick={handleCancel}
                            size="large"
                            fullWidth
                            variant="contained"
                            id="cancel-modal"
                          >
                            Cancel
                          </Button>
                          <Box px={2} />
                          <Button
                            className={classes.button}
                            color="secondary"
                            fullWidth
                            onClick={() => onClickConfirm(resetForm)}
                            variant="contained"
                            id="claim-modal"
                          >
                            Submit Payment
                          </Button>
                        </Box>
                      </Container>
                    </Slide>
                  </Modal>
                </Form>
              </CardContent>
            </Card>
          </Container>
        );
      }}
    </Formik>
  );
};

export default PaymentRequest;
export { PaymentRequest };
