import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Container,
  Fade,
  FormHelperText,
  FormLabel,
  LinearProgress,
  Slide,
  Modal,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import type { Account } from '../../../types/Account.d';
import { ConsumeGiftFormProps } from './ConsumeGiftForm';

// CBB: Shouldn't have to use this hack to get around state issues
const EMPTY_CONFIRMATION = {
  giftCodeB58: '',
  giftCodeStatus: '',
  giftValue: 0,
};

const CLAIMED_GIFT_ERROR =
  '13 INTERNAL: transactions_manager.submit_tx_proposal: Connection(Operation { error: TransactionValidation(ContainsSpentKeyImage), total_delay: 0ns, tries: 1 })';

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

// TODO -- right now, we can show a progress bar for the sending modal
// But, it would be nice to have a counter that parses up to, say, 10 seconds, before
// warning that it's taking a bit long...
// TODO -- we may want to refactor out the modals and feed them props just to keep
// this component managable.
const ConsumeGiftForm: FC<ConsumeGiftFormProps> = ({
  checkGiftCodeStatus,
  claimGiftCode,
  selectedAccount,
}: ConsumeGiftFormProps) => {
  const classes = useStyles();
  const [confirmation, setConfirmation] = useState(EMPTY_CONFIRMATION);
  const [showModal, setShowModal] = useState(false);
  const [isAwaitingConformation, setIsAwaitingConformation] = useState(false);
  const [submittingConfirmedGift, setSubmittingConfirmedGift] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const { t } = useTranslation('ConsumeGiftForm');

  // We'll use this array in prep for future patterns with multiple accounts
  // TODO - fix the type for Account
  const mockMultipleAccounts: Array<Account> = [
    {
      b58Code: selectedAccount.account.mainAddress,
      balance: selectedAccount.balanceStatus.unspentPmob,
      name: selectedAccount.account.name,
    },
  ];

  const handleClose = () => {
    setShowModal(false);
    setIsAwaitingConformation(false);
    setConfirmation(EMPTY_CONFIRMATION);
    enqueueSnackbar(t('giftCanceled'), {
      variant: 'warning',
    });
  };

  const handleConfirm = (setErrors, setStatus) => async () => {
    setSubmittingConfirmedGift(true);
    setShowModal(false);
    try {
      await claimGiftCode({
        accountId: selectedAccount.account.accountId,
        giftCodeB58: confirmation.giftCodeB58,
      });

      /* istanbul ignore next */
      if (isMountedRef.current) {
        setStatus({ success: true });
        setSubmittingConfirmedGift(false);
        setIsAwaitingConformation(false);
        setConfirmation(EMPTY_CONFIRMATION);
        enqueueSnackbar(t('confirmation'), {
          variant: 'success',
        });
      }
    } catch (err) {
      /* istanbul ignore next */
      if (isMountedRef.current) {
        const sanitizedError = err.message === CLAIMED_GIFT_ERROR ? t('giftClaimed') : err.message;
        setStatus({ success: false });
        setErrors({ submit: sanitizedError });
        setSubmittingConfirmedGift(false);
        setIsAwaitingConformation(false);
        setConfirmation(EMPTY_CONFIRMATION);
        enqueueSnackbar(t('error'), {
          variant: 'error',
        });
      }
    }
  };

  // TODO - not sure what this is about. Should delete after confirming it's useless
  // const createAccountLabel = (account: Account) => {
  //   const name =
  //     account.name && account.name.length > 0 ? `${account.name}: ` : `${t('unnamed')}: `;
  //   return (
  //     <Box display="flex" justifyContent="space-between">
  //       <Typography color="textPrimary">
  //         {name}
  //         <ShortCode code={account.b58Code} />
  //       </Typography>
  //       <Typography color="textPrimary">
  //         <MOBNumberFormat
  //           value={account.balance.toString()} // TODO - have MOBNumberFormat take BigInt
  //           valueUnit="pMOB"
  //         />
  //       </Typography>
  //     </Box>
  //   );
  // };

  // TODO Reintroduce with multiple accounts
  // const renderSenderPublicAdddressOptions = (accounts: Account[], isSubmitting: boolean) => (
  //   <Box pt={2}>
  //     <FormLabel className={classes.form} component="legend">
  //       <Typography color="primary">{t('select')}</Typography>
  //     </FormLabel>
  //     <Field component={RadioGroup} name="senderPublicAddress">
  //       <Box display="flex" justifyContent="space-between">
  //         <Typography color="textPrimary">{t('accountName')}</Typography>
  //         <Typography color="textPrimary">{t('accountBalance')}</Typography>
  //       </Box>
  //       {accounts.map((account: Account) => (
  //         <FormControlLabel
  //           key={account.b58Code}
  //           value={account.b58Code}
  //           control={<Radio disabled={isSubmitting} />}
  //           label={createAccountLabel(account)}
  //           labelPlacement="end"
  //           disabled={isSubmitting}
  //           classes={{
  //             label: classes.label,
  //             root: classes.formControlLabelRoot,
  //           }}
  //         />
  //       ))}
  //     </Field>
  //   </Box>
  // );

  return (
    <Formik
      initialValues={{
        giftCodeB58: '', // mobs
        senderPublicAddress: mockMultipleAccounts[0].b58Code,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        giftCodeB58: Yup.string().required(t('giftB58Validation')),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
        try {
          setIsAwaitingConformation(true);
          const result = await checkGiftCodeStatus({ giftCodeB58: values.giftCodeB58 });

          if (result === null || result === undefined) {
            throw new Error(t('giftB58Error'));
          }

          const { giftCodeStatus, giftCodeValue } = result;

          setConfirmation({
            giftCodeB58: values.giftCodeB58,
            giftCodeStatus,
            giftValue: giftCodeValue,
          });

          if (giftCodeStatus === 'GiftCodeAvailable') {
            setShowModal(true);
          } else {
            setStatus({ success: false });
            setSubmitting(false);
            setIsAwaitingConformation(false);
            if (giftCodeStatus === 'GiftCodeSubmittedPending') {
              enqueueSnackbar(t('giftB58Error'), {
                variant: 'warning',
              });
            }

            if (giftCodeStatus === 'GiftCodeClaimed') {
              enqueueSnackbar(t('giftClaimed'), {
                variant: 'warning',
              });
            }
          }

          /* istanbul ignore next */
          if (isMountedRef.current) {
            setSubmitting(false);
            resetForm();
          }
        } catch (err) {
          /* istanbul ignore next */
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
            setIsAwaitingConformation(false);
          }
        }
      }}
    >
      {({ errors, isSubmitting, dirty, isValid, submitForm, setErrors, setStatus, values }) => {
        const selectedBalance =
          // TODO -- this is fine. we'll gut it anyway once we add multiple accounts
          // eslint-disable-next-line
          // @ts-ignore
          mockMultipleAccounts.find((account) => account.b58Code === values.senderPublicAddress)
            .balance;
        let increasedBalance;
        let totalSent;

        if (confirmation?.giftValue) {
          increasedBalance = Number(selectedBalance) + confirmation?.giftValue - 10000000000;
          totalSent = confirmation?.giftValue;
        }

        return (
          <Form>
            {/* {renderSenderPublicAdddressOptions(mockMultipleAccounts, isSubmitting)} */}
            <Box pt={4}>
              <FormLabel component="legend">
                <Typography color="primary">{t('giftDetails')}</Typography>
              </FormLabel>
              <Field
                component={TextField}
                fullWidth
                label={t('giftCode')}
                margin="normal"
                name="giftCodeB58"
                id="giftCodeB58"
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
              isSubmitting={isAwaitingConformation || isSubmitting}
            >
              {t('openGift')}
            </SubmitButton>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={showModal}
              onClose={handleClose}
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
                    {t('giftConfirmation')}
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
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={(10000000000).toString()}
                      />
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography color="primary">{t('giftValue')}:</Typography>
                    <Typography color="primary">
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={(confirmation?.giftValue - 10000000000).toString()}
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
                      onClick={handleClose}
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
                      onClick={handleConfirm(setErrors, setStatus)}
                      variant="contained"
                      id="claim-modal"
                    >
                      {t('claimGift')}
                    </Button>
                  </Box>
                </Container>
              </Slide>
            </Modal>
            <Modal
              className={classes.modal}
              open={submittingConfirmedGift}
              closeAfterTransition
              disableAutoFocus
              disableEnforceFocus
              disableBackdropClick
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
              }}
            >
              <Fade in={submittingConfirmedGift} timeout={{ enter: 15000, exit: 0 }}>
                <Box width="100%" p={3}>
                  <LinearProgress />
                </Box>
              </Fade>
            </Modal>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ConsumeGiftForm;
export { ConsumeGiftForm };
