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
// import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import type { Theme } from '../../../theme';
import type { Account } from '../../../types/Account';
// import { PaymentRequestProps } from './PaymentRequest.d';

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
    display: 'flex',
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
    maxWidth: 800,
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
}));

const PaymentRequest: FC<PaymentRequestProps> = ({
  confirmation,
  feePmob,
  onClickCancel,
  selectedAccount,
  showModal,
}: PaymentRequestProps) => {
  const classes = useStyles();
  // const { t } = useTranslation('PaymentRequest');
  // ---------------------
  // const createPayReq = async () => {
  //   try {
  //     const result = await createPaymentRequest(myAcctId, amountPmob);
  //     console.log(result);
  //   } catch (error) {
  //     throw new Error('error from createpayreq');
  //   }
  // };
  const onClickViewPaymentRequest = async (b58code) => {
    try {
      const result = await checkB58PaymentRequest(b58code);
      if (result.error) {
        console.log(result.error);
      } else {
        console.log(result);
      }
      //  open modal
      //  set request address as publicAddressB58
      //  set requested value as value
      //  add confirm and cancel
      //  build and submit Transaction
      //  enque snackbar
    } catch (error) {
      console.log(error);
      // throw new Error(error);
    }
  };

  // useEffect(() => {
  //   createPayReq();
  // }, []);

  const mockMultipleAccounts: Array<Account> = [
    {
      b58Code: selectedAccount.account.mainAddress,
      balance: selectedAccount.balanceStatus.unspentPmob,
      name: selectedAccount.account.name,
    },
  ];

  return (
    <Formik
      initialValues={{
        paymentRequestCodeB58: '', // mobs
        senderPublicAddress: mockMultipleAccounts[0].b58Code,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        // update
        paymentRequestCodeB58: Yup.string().required('Required!'),
      })}
      onSubmit={(values) => onClickViewPaymentRequest(values.paymentRequestCodeB58)}
      // onSubmit={(values) => onClickOpenGift(values.paymentRequestCodeB58)}
    >
      {({ errors, isSubmitting, dirty, isValid, submitForm, values }) => {
        const selectedBalance =
          // TODO -- this is fine. we'll gut it anyway once we add multiple accounts
          // eslint-disable-next-line
          // @ts-ignore
          mockMultipleAccounts.find((account) => account.b58Code === values.senderPublicAddress)
            .balance;
        let increasedBalance;
        let totalSent;

        if (confirmation?.giftValue) {
          increasedBalance = Number(selectedBalance) + confirmation?.giftValue - Number(feePmob);
          totalSent = confirmation?.giftValue;
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
                      Enter a Payment Request code to view full request details. After viewing
                      request details, accept or decline request.
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
                    open={showModal}
                    onClose={onClickCancel}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 1000,
                    }}
                    disableAutoFocus
                    disableEnforceFocus
                  >
                    <Slide in={showModal} timeout={{ enter: 0, exit: 0 }}>
                      <Container className={classes.paper}>
                        <Typography color="textPrimary" variant="h1" id="transition-modal-title">
                          Confirm Payment Request
                        </Typography>
                        <Box py={2} />
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">{t('accountBalance')}:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat
                              suffix=" MOB"
                              valueUnit="pMOB"
                              value={selectedBalance?.toString()}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">---</Typography>
                          <Typography color="textPrimary">---</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">{t('total')}:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat
                              suffix=" MOB"
                              valueUnit="pMOB"
                              value={totalSent?.toString() as string}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">{t('fee')}:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat suffix=" MOB" valueUnit="pMOB" value={feePmob} />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="primary">{t('giftValue')}:</Typography>
                          <Typography color="primary">
                            <MOBNumberFormat
                              suffix=" MOB"
                              valueUnit="pMOB"
                              value={(confirmation?.giftValue - Number(feePmob)).toString()}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography>---</Typography>
                          <Typography>---</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="primary">{t('newBalance')}:</Typography>
                          <Typography color="primary">
                            <MOBNumberFormat
                              suffix=" MOB"
                              valueUnit="pMOB"
                              value={increasedBalance?.toString() as string}
                            />
                          </Typography>
                        </Box>
                        <Box py={1} />
                        <Box display="flex" justifyContent="space-between">
                          <Button
                            className={classes.button}
                            color="secondary"
                            onClick={onClickCancel}
                            size="large"
                            fullWidth
                            variant="contained"
                            id="cancel-modal"
                          >
                            {t('cancel')}
                          </Button>
                          <Box px={2} />
                          <Button
                            className={classes.button}
                            color="secondary"
                            fullWidth
                            // onClick={onClickClaimGift}
                            variant="contained"
                            id="claim-modal"
                          >
                            {t('claimGift')}
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
