import React, { useState } from 'react';
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
import { checkB58PaymentRequest } from '../../../services/checkB58PaymentRequest.service';
import type { Theme } from '../../../theme';
import type { Account } from '../../../types/Account';
import { convertMobStringToPicoMobString } from '../../../utils/convertMob';
import { ErrorSharp } from '@material-ui/icons';
import LongCode from '../../../components/LongCode';
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
    // --------
    border: '4px solid #000000b5',
    // padding: 16px 32px 24px;
    // max-width: 800px;
    boxShadow:
      '0px 5px 5px 10px rgb(0 0 0 / 20%), 0px 5px 5px 5px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
    boxShadow:
      '0px 3px 3px 3px rgb(0 0 0 / 20%), 0px 3px 3px 3px rgb(0 0 0 / 14%), 0px 3px 3px 3px rgb(0 0 0 / 12%)',
    // background-color: #FAFAFA;
    borderRadius: '1rem',
    // latest edit turn on below
    margin: '1rem',
    border: '10px solid #00000017',
    // margin: 1rem;
    // padding: 16px 32px 24px;
    // max-width: 800px;
    boxShadow:
      '0px 3px 3px 3px rgb(0 0 0 / 20%), 0px 3px 3px 3px rgb(0 0 0 / 14%), 0px 0px 10px 10px rgb(0 0 0 / 12%)',
    borderRadius: '3rem',
    // background-color: #FAFAFA;
    padding: '1.5rem 3rem',
  },
  root: {},
}));

const PaymentRequest: FC<PaymentRequestProps> = ({
  confirmation,
  feePmob,
  onClickCancel,
  onClickConfirm,
  selectedAccount,
  onClickViewPaymentRequest,
  existingPin,
  isSynced,
  pinThresholdPmob,
  showing,
  enqueueSnackbar,
}: // showModal,
PaymentRequestProps) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
    onClickCancel();
  };

  const handleSubmit = () => {};

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
  // const onClickViewPaymentRequest = async ({
  //   accountId,
  //   fee,
  //   // showModal,
  //   recipientPublicAddress,
  //   valuePmob,
  // }: {
  //   accountId: string;
  //   alias: string;
  //   fee: string;
  //   isChecked: boolean;
  //   recipientPublicAddress: StringHex;
  //   valuePmob: string;
  // }) => {
  //   // let result;
  //   try {
  //     let result = await buildTransaction({ accountId, fee, recipientPublicAddress, valuePmob });

  //     if (result === null || result === undefined) {
  //       console.log('build error!!!');
  //       throw new Error(t('sendBuildError'));
  //     }

  //     const {
  //       feeConfirmation,
  //       totalValueConfirmation,
  //       txProposal,
  //       txProposalReceiverB58Code,
  //     } = result;
  //     setConfirmation({
  //       feeConfirmation,
  //       totalValueConfirmation,
  //       txProposal,
  //       txProposalReceiverB58Code,
  //     });
  //     // setSendingStatus(Showing.CONFIRM_FORM);
  //     setShowModal(true);
  //   } catch (err) {
  //     enqueueSnackbar(err.message, { variant: 'error' });
  //   }
  // };

  const handleViewPaymentRequest = async (b58code) => {
    try {
      const result = await checkB58PaymentRequest(b58code);
      if (result.error) {
        console.log(result.error);
        throw new Error(result.error);
      }
      console.log(result);
      const { publicAddressB58, value } = result;
      await onClickViewPaymentRequest({
        accountId: selectedAccount.account.accountId,
        // alias: values.alias,
        fee: feePmob,
        // fee: convertMobStringToPicoMobString(feePmob),
        // isChecked,
        // recipientPublicAddress: values.recipientPublicAddress,
        recipientPublicAddress: publicAddressB58,
        // valuePmob: convertMobStringToPicoMobString(values.mobAmount),
        valuePmob: value,
      });

      //  open modal
      // setShowModal(true);

      // setPaymentRequest(result);
      //  set request address as publicAddressB58
      //  set requested value as value
      //  add confirm and cancel
      //  build and submit Transaction
      //  enque snackbar
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });

      // return error;
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
      onSubmit={(values) => handleViewPaymentRequest(values.paymentRequestCodeB58)}
      // onSubmit={(values) => onClickOpenGift(values.paymentRequestCodeB58)}
    >
      {({ errors, isSubmitting, dirty, isValid, submitForm, values }) => {
        console.log(errors);
        const selectedBalance =
          // TODO -- this is fine. we'll gut it anyway once we add multiple accounts
          // eslint-disable-next-line
          // @ts-ignore
          BigInt(
            mockMultipleAccounts.find((account) => account.b58Code === values.senderPublicAddress)
              .balance
          );
        let isPinRequiredForTransaction = false;
        if (confirmation.totalValueConfirmation) {
          isPinRequiredForTransaction =
            confirmation.totalValueConfirmation + confirmation.feeConfirmation >=
            BigInt(pinThresholdPmob);
        }
        console.log(isPinRequiredForTransaction);
        let remainingBalance;
        let totalSent = 0;
        if (confirmation.totalValueConfirmation && confirmation.feeConfirmation) {
          remainingBalance =
            selectedBalance - (confirmation.totalValueConfirmation + confirmation.feeConfirmation);
          totalSent = confirmation.totalValueConfirmation + confirmation.feeConfirmation;
        }
        console.log(`total sent --- ${totalSent}`);
        console.log(`remainingBalance --- ${remainingBalance}`);
        console.log(confirmation);

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
                    open={confirmation.txProposalReceiverB58Code !== ''}
                    // open={showModal}
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
                      {/* <Slide in={showModal} timeout={{ enter: 0, exit: 0 }}> */}
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
                        <Box display="flex" justifyContent="space-evenly">
                          <LongCode
                            code={confirmation.txProposalReceiverB58Code}
                            codeClass={classes.code}
                          />
                          {/* <Box display="flex" justifyContent="space-between">
                          <Typography color="textPrimary">Account Balance:</Typography>
                          <Typography color="textPrimary">
                            <MOBNumberFormat
                              suffix=" MOB"
                              valueUnit="pMOB"
                              value={selectedBalance?.toString()}
                            />
                          </Typography>
                        </Box> */}
                          <Box alignSelf="center">
                            <Box display="flex" justifyContent="space-between">
                              <Typography color="primary" style={{ margin: ' 0px 10px 0px 0px' }}>
                                Amount:
                              </Typography>
                              <Typography color="primary">
                                <MOBNumberFormat
                                  suffix=" MOB"
                                  valueUnit="pMOB"
                                  value={(confirmation?.totalValueConfirmation)
                                    // confirmation?.totalValueConfirmation - Number(feePmob)
                                    .toString()}
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
                                <MOBNumberFormat suffix=" MOB" valueUnit="pMOB" value={feePmob} />
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
                                  suffix=" MOB"
                                  valueUnit="pMOB"
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
                              suffix=" MOB"
                              valueUnit="pMOB"
                              value={selectedBalance?.toString()}
                            />
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="primary">Balance After Payment:</Typography>
                          <Typography color="primary">
                            <MOBNumberFormat
                              suffix=" MOB"
                              valueUnit="pMOB"
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
                            // onClick={onClickCancel}
                            size="large"
                            fullWidth
                            variant="contained"
                            id="cancel-modal"
                          >
                            {/* {t('cancel')} */}
                            Cancel
                          </Button>
                          <Box px={2} />
                          <Button
                            className={classes.button}
                            color="secondary"
                            fullWidth
                            // onClick={onClickClaimGift}
                            onClick={onClickConfirm}
                            variant="contained"
                            id="claim-modal"
                          >
                            Submit Payment
                            {/* {t('claimGift')} */}
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
