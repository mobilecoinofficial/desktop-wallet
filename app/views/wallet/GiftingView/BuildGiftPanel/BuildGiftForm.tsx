import React, { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Container,
  Fade,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  LinearProgress,
  Slide,
  Modal,
  Radio,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { AccountCard, SubmitButton, MOBNumberFormat } from '../../../../components';
import ShortCode from '../../../../components/ShortCode';
import { MOBIcon } from '../../../../components/icons';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import useMobileCoinD from '../../../../hooks/useMobileCoinD';
import type { Theme } from '../../../../theme';
import type Account from '../../../../types/Account';

// CBB: Shouldn't have to use this hack to get around state issues
const EMPTY_CONFIRMATION = {
  feeConfirmation: null,
  giftB58Code: '',
  totalValueConfirmation: null,
  txProposal: null,
};

const useStyles = makeStyles((theme: Theme) => {
  return {
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
      overflow: 'auto',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      maxWidth: 800,
      padding: theme.spacing(2, 4, 3),
    },
    root: {},
  };
});

// TODO - ya, this definitely shouldn't live here
const convertMobStringToPicoMobBigInt = (mobString: string): bigint => {
  return BigInt(mobString.replace('.', ''));
};

// TODO -- right now, we can show a progress bar for the sending modal
// But, it would be nice to have a counter that parses up to, say, 10 seconds, before
// warning that it's taking a bit long...
// TODO -- we may want to refactor out the modals and feed them props just to keep
// this component manageable.
const BuildGiftForm: FC = () => {
  const classes = useStyles();
  const [confirmation, setConfirmation] = useState(EMPTY_CONFIRMATION);
  const [showModal, setShowModal] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [isAwaitingConformation, setIsAwaitingConformation] = useState(false);
  const [submittingConfimedGift, setSubmittingConfirmedGift] = useState(false);
  const [slideExitSpeed, setSlideExitSpeed] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const {
    accountName,
    b58Code,
    balance,
    buildGiftCode,
    networkHighestBlockIndex,
    nextBlock,
    submitGiftCode,
  } = useMobileCoinD();
  const { t } = useTranslation('BuildGiftForm');

  // TODO - this isSynced stuff should live in 1 location -- maybe as context state
  let isSynced = false;
  if (
    networkHighestBlockIndex === null ||
    nextBlock === null ||
    networkHighestBlockIndex < 0 ||
    nextBlock < 0 ||
    nextBlock - 1 > networkHighestBlockIndex
  ) {
    isSynced = false;
  } else {
    isSynced = networkHighestBlockIndex - nextBlock < 2; // Let's say a diff of 1 is fine.
  }

  // TODO - consider adding minimum gift ~ 1 MOB
  // We'll use this array in prep for future patterns with multiple accounts
  const mockMultipleAccounts: Array<Account> = [
    {
      b58Code: b58Code || '', // TODO -- This hack is to bypass the null state hack on initialization
      balance: balance || BigInt(0), // once we move to multiple accounts, we won't have to null the values of an account (better typing!)
      name: accountName,
    },
  ];

  const handleShowCode = () => {
    setSlideExitSpeed(1000);
    setShowCode(true);
  };

  const handleClose = () => {
    setSlideExitSpeed(0);
    setShowCode(false);
    setShowModal(false);
    setIsAwaitingConformation(false);
    setConfirmation(EMPTY_CONFIRMATION);
    enqueueSnackbar(t('giftCanceled'), {
      variant: 'warning',
    });
  };

  const handleConfirm = (setErrors, setStatus) => {
    return async () => {
      setSubmittingConfirmedGift(true);
      setShowModal(false);
      try {
        if (confirmation.txProposal === null || confirmation.txProposal === undefined) {
          throw new Error(t('confirmationNotFound'));
        }
        await submitGiftCode(confirmation.txProposal, confirmation.giftB58Code);
        if (isMountedRef.current) {
          setStatus({ success: true });
          setSubmittingConfirmedGift(false);
          setIsAwaitingConformation(false);
          setConfirmation(EMPTY_CONFIRMATION);
          enqueueSnackbar(t('giftCreated'), {
            variant: 'success',
          });
        }
      } catch (err) {
        if (isMountedRef.current) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmittingConfirmedGift(false);
          setIsAwaitingConformation(false);
          setConfirmation(EMPTY_CONFIRMATION);
          enqueueSnackbar(t('error'), {
            variant: 'error',
          });
        }
      }
    };
  };

  const createAccountLabel = (account: Account) => {
    const name =
      account.name && account.name.length > 0 ? `${account.name}: ` : `${t('unnamed')}: `;
    return (
      <Box display="flex" justifyContent="space-between">
        <Typography>
          {name}
          <ShortCode code={account.b58Code} />
        </Typography>
        <Typography>
          <MOBNumberFormat
            value={account.balance.toString()} // TODO - have MOBNumberFormat take BigInt
            valueUnit="pMOB"
          />
        </Typography>
      </Box>
    );
  };

  const renderSenderPublicAddressOptions = (accounts: Account[], isSubmitting: boolean) => {
    return (
      <Box pt={2}>
        <FormLabel className={classes.form} component="legend">
          <Typography color="primary">{t('select')}</Typography>
        </FormLabel>
        <Field component={RadioGroup} name="senderPublicAddress">
          <Box display="flex" justifyContent="space-between">
            <Typography>{t('accountName')}</Typography>
            <Typography>{t('accountBalance')}</Typography>
          </Box>
          {accounts.map((account: Account) => {
            return (
              <FormControlLabel
                key={account.b58Code}
                value={account.b58Code}
                control={<Radio disabled={isSubmitting} />}
                label={createAccountLabel(account)}
                labelPlacement="end"
                disabled={isSubmitting}
                classes={{
                  label: classes.label,
                  root: classes.formControlLabelRoot,
                }}
              />
            );
          })}
        </Field>
      </Box>
    );
  };

  const validateAmount = (selectedBalance: bigint, fee: bigint) => {
    return (valueString: string) => {
      let error;
      const valueAsPicoMob = BigInt(valueString.replace('.', ''));
      if (valueAsPicoMob + fee > selectedBalance) {
        // TODO - probably want to replace this before launch
        error = t('errorFee');
      }
      return error;
    };
  };

  // We'll use this to auto-select all text when focused. This is a better user
  // experience than having to click the left-most area to start typing (else)
  // having to spam backspace.
  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <Formik
      initialValues={{
        feeAmount: '0.010000000000', // TODO we need to pull this from constants
        mobValue: '0', // mobs
        senderPublicAddress: mockMultipleAccounts[0].b58Code,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        mobValue: Yup.number()
          .positive(t('positiveValidation'))
          .required(t('positiveValidationRequired')),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
        // On submit, let's build the TxProposal.
        // On success, we set the TxProposal in state.
        // That triggers the confirmation modal.
        // In the modal, the user has to confirm that they have written the
        // code down (similiar to create new account modal).
        // After they do, they can "Create Gift"
        try {
          setIsAwaitingConformation(true);
          const result = await buildGiftCode(
            convertMobStringToPicoMobBigInt(values.mobValue),
            convertMobStringToPicoMobBigInt(values.feeAmount)
          );
          if (result === null || result === undefined) {
            throw new Error(t('errorBuild'));
          }

          const { feeConfirmation, giftB58Code, totalValueConfirmation, txProposal } = result;

          setConfirmation({
            feeConfirmation,
            giftB58Code,
            totalValueConfirmation,
            txProposal,
          });
          setShowModal(true);

          if (isMountedRef.current) {
            setSubmitting(false);
            resetForm();
          }
        } catch (err) {
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
            setIsAwaitingConformation(false);
          }
        }
      }}
    >
      {({ errors, isSubmitting, isValid, dirty, submitForm, values, setErrors, setStatus }) => {
        const selectedBalance =
          // TODO -- this is fine. we'll gut it anyway once we add multiple accounts
          // eslint-disable-next-line
          // @ts-ignore
          mockMultipleAccounts.find((account) => {
            return account.b58Code === values.senderPublicAddress;
          }).balance;

        let remainingBalance;
        let totalSent;
        if (confirmation?.totalValueConfirmation && confirmation?.feeConfirmation) {
          remainingBalance =
            selectedBalance -
            (confirmation?.totalValueConfirmation + confirmation?.feeConfirmation);
          totalSent = confirmation?.totalValueConfirmation + confirmation?.feeConfirmation;
        }

        return (
          <Form>
            {renderSenderPublicAddressOptions(mockMultipleAccounts, isSubmitting)}
            <Box pt={4}>
              <FormLabel component="legend">
                <Typography color="primary">{t('giftDetails')}</Typography>
              </FormLabel>
              <Field
                component={TextField}
                fullWidth
                label={t('mobLabel')}
                margin="normal"
                name="mobValue"
                id="mobValue"
                type="text"
                onFocus={handleSelect}
                validate={validateAmount(
                  selectedBalance,
                  BigInt(values.feeAmount * 1_000_000_000_000)
                )}
                InputProps={{
                  inputComponent: MOBNumberFormat,
                  startAdornment: (
                    <InputAdornment position="start">
                      <MOBIcon height={20} width={20} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            {!isSynced && (
              <Box mt={3}>
                <FormHelperText error>{t('errorSyncBeforeSending')}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              disabled={!dirty || !isSynced || !isValid || isSubmitting}
              onClick={submitForm}
              isSubmitting={isAwaitingConformation || isSubmitting}
            >
              {isSynced ? t('createGift') : `${t('walletSyncing')}...`}
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
              <Slide in={showModal} timeout={{ enter: 0, exit: slideExitSpeed }}>
                <Container className={classes.paper}>
                  <Box py={2}>
                    <h2 id="transition-modal-title">{t('')}</h2>
                    <p id="transition-modal-description">{t('giftConfirmationDescription')}:</p>
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Typography>{t('accountBalance')}:</Typography>
                    <Typography>
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={selectedBalance?.toString()}
                      />
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>---</Typography>
                    <Typography>---</Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Typography color="primary">{t('giftValue')}:</Typography>
                    <Typography color="primary">
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={confirmation?.totalValueConfirmation?.toString()}
                      />
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Typography>{t('fee')}:</Typography>
                    <Typography>
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={confirmation?.feeConfirmation?.toString()}
                      />
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Typography>{t('total')}:</Typography>
                    <Typography>
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={totalSent?.toString()}
                      />
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>---</Typography>
                    <Typography>---</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>{t('remaining')}:</Typography>
                    <Typography>
                      <MOBNumberFormat
                        suffix=" MOB"
                        valueUnit="pMOB"
                        value={remainingBalance?.toString()}
                      />
                    </Typography>
                  </Box>
                  <Box py={1} />
                  {/* TODO - after multiple accounts, we should actually store these gift codes. please check jira for full explation */}
                  <Typography variant="body2" color="textPrimary">
                    {t('mobWillBeSent')}
                  </Typography>
                  <Box py={1} />
                  {showCode ? (
                    <AccountCard
                      isGift
                      account={{
                        b58Code: confirmation?.giftB58Code,
                        mobUrl: `https://mobilecoin.com/mob58/${confirmation?.giftB58Code}`,
                        name: t('pending'),
                      }}
                    />
                  ) : (
                    <Box display="flex" justifyContent="center" py={27}>
                      <Button color="secondary" size="large" onClick={handleShowCode}>
                        {t('showCode')}
                      </Button>
                    </Box>
                  )}

                  <Box display="flex" justifyContent="space-between">
                    <Button
                      className={classes.button}
                      color="secondary"
                      onClick={handleClose}
                      size="large"
                      fullWidth
                      variant="contained"
                    >
                      {t('cancel')}
                    </Button>
                    <Box px={2} />
                    <Button
                      className={classes.button}
                      color="secondary"
                      disabled={!showCode}
                      fullWidth
                      onClick={handleConfirm(setErrors, setStatus)}
                      variant="contained"
                    >
                      {showCode ? t('confirmGift') : t('secureCode')}
                    </Button>
                  </Box>
                </Container>
              </Slide>
            </Modal>
            <Modal
              className={classes.modal}
              open={submittingConfimedGift}
              closeAfterTransition
              disableAutoFocus
              disableEnforceFocus
              disableBackdropClick
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
              }}
            >
              <Fade in={submittingConfimedGift} timeout={{ enter: 15000, exit: 0 }}>
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

export default BuildGiftForm;
