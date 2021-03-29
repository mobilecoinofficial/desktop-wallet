import React, { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  LinearProgress,
  Slide,
  MenuItem,
  Modal,
  Radio,
  Select,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../../components';
import LongCode from '../../../../components/LongCode';
import ShortCode from '../../../../components/ShortCode';
import { MOBIcon } from '../../../../components/icons';
import useFullService from '../../../../hooks/useFullService';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import type { Theme } from '../../../../theme';
import type Account from '../../../../types/Account';
import * as localStore from '../../../../utils/LocalStore';
import { makeHash } from '../../../../utils/hashing';
import isSyncedBuffered from '../../../../utils/isSyncedBuffered';

// CBB: Shouldn't have to use this hack to get around state issues
const EMPTY_CONFIRMATION = {
  feeConfirmation: null,
  totalValueConfirmation: null,
  txProposal: null,
  txProposalReceiverB58Code: '',
};

const useStyles = makeStyles((theme: Theme) => ({
  button: { width: 200 },
  center: { display: 'flex', justifyContent: 'center' },
  code: {
    alignItems: 'center',
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
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
}));

// TODO -- right now, we can show a progress bar for the sending modal
// But, it would be nice to have a counter that parses up to, say, 10 seconds, before
// warning that it's taking a bit long...
// TODO -- we may want to refactor out the modals and feed them props just to keep
// this component managable.

// TODO - ya, this definitely shouldn't live here
const PICO_MOB_PRECISION = 12;

const ensureMobStringPrecision = (mobString: string): string => {
  const num = Number(mobString);
  if (Number.isNaN(num)) {
    throw new Error('mobString is NaN');
  }

  return num.toFixed(PICO_MOB_PRECISION);
};

// This function assumes basic US style decimal places.
// We'll need to revisit for differnet formats
const convertMobStringToPicoMobString = (mobString: string): string =>
  ensureMobStringPrecision(mobString).replace('.', '');

const convertPicoMobStringToMob = (picoMobString: string): string => {
  if (picoMobString.length <= 12) {
    return `0.${'0'.repeat(12 - picoMobString.length)}${picoMobString}`;
  }

  return [
    picoMobString.slice(0, picoMobString.length - 12),
    '.',
    picoMobString.slice(picoMobString.length - 12),
  ].join('');
};

// MOVE LATER
function commafy(num: string) {
  const str = num.split('.');
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  return str.join('.');
}

const SendMobForm: FC = () => {
  const classes = useStyles();
  const [confirmation, setConfirmation] = useState(EMPTY_CONFIRMATION);
  const { t } = useTranslation('SendMobForm');

  const [contactId, setContactId] = useState('');
  const [open, setOpen] = useState(false);
  const [isAwaitingConformation, setIsAwaitingConformation] = useState(false);
  const [sendingOpen, setSendingOpen] = useState(false);
  const [slideExitSpeed, setSlideExitSpeed] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const { buildTransaction, selectedAccount, submitTransaction } = useFullService();

  const listOfContacts = localStore.getContacts().filter((x) => x.recipientAddress);

  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);

  const isSynced = isSyncedBuffered(networkBlockIndexBigInt, accountBlockIndexBigInt);

  // We'll use this array in prep for future patterns with multiple accounts
  // TODO - fix the type for Account
  const mockMultipleAccounts: Array<Account> = [
    {
      b58Code: selectedAccount.account.mainAddress,
      balance: selectedAccount.balanceStatus.unspentPmob,
      mobUrl: selectedAccount.mobUrl,
      name: selectedAccount.account.name,
    },
  ];

  const handleOpen = (values, setStatus, setErrors) => async () => {
    let result;
    try {
      setIsAwaitingConformation(true);
      result = await buildTransaction({
        accountId: selectedAccount.account.accountId,
        fee: convertMobStringToPicoMobString(values.feeAmount),
        recipientPublicAddress: values.recipientPublicAddress,
        valuePmob: convertMobStringToPicoMobString(values.mobAmount),
      });
      if (result === null || result === undefined) {
        throw new Error('Could not build transaction.');
      }

      const {
        feeConfirmation,
        totalValueConfirmation,
        txProposal,
        txProposalReceiverB58Code,
      } = result;

      setConfirmation({
        feeConfirmation,
        totalValueConfirmation,
        txProposal,
        txProposalReceiverB58Code,
      });

      setOpen(true);
    } catch (err) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setIsAwaitingConformation(false);
      setConfirmation(EMPTY_CONFIRMATION);
    }

    const {
      feeConfirmation,
      totalValueConfirmation,
      txProposal,
      txProposalReceiverB58Code,
    } = result;
    setConfirmation({
      feeConfirmation,
      totalValueConfirmation,
      txProposal,
      txProposalReceiverB58Code,
    });

    setOpen(true);
  };

  const handleClose = (setSubmitting: (boolean: boolean) => void, resetForm: () => void) => () => {
    setSlideExitSpeed(0);
    enqueueSnackbar(t('transactionCanceled'), {
      variant: 'warning',
    });
    setOpen(false);
    setSubmitting(false);
    resetForm();
    setIsAwaitingConformation(false);
    setConfirmation(EMPTY_CONFIRMATION);
  };

  const createAccountLabel = (account: Account) => {
    const name = account.name && account.name.length > 0 ? `${account.name}: ` : `${t('unnamed')}:`;
    return (
      <Box display="flex" justifyContent="space-between">
        <Typography color="textPrimary">
          {' '}
          {name}
          <ShortCode code={account.b58Code} />
        </Typography>
        <Typography color="textPrimary">
          <MOBNumberFormat value={account.balance.toString()} valueUnit="pMOB" />
        </Typography>
      </Box>
    );
  };

  const renderSenderPublicAdddressOptions = (accounts: Account[], isSubmitting: boolean) => (
    <Box pt={2}>
      <FormLabel className={classes.form} component="legend">
        <Typography color="primary">{t('select')}</Typography>
      </FormLabel>
      <Field component={RadioGroup} name="senderPublicAddress">
        <Box display="flex" justifyContent="space-between">
          <Typography color="textPrimary">{t('accountName')}</Typography>
          <Typography color="textPrimary">{t('accountBalance')}</Typography>
        </Box>
        {accounts.map((account: Account) => (
          <FormControlLabel
            key={account.b58Code}
            value={account.b58Code}
            control={<Radio disabled={isSubmitting} />}
            label={createAccountLabel(account)}
            labelPlacement="end"
            disabled={isSubmitting}
            classes={{ label: classes.label }}
          />
        ))}
      </Field>
    </Box>
  );

  const validateAmount = (selectedBalance: bigint, fee: bigint) => (valueString: string) => {
    let error;
    const valueAsPicoMob = BigInt(valueString.replace('.', ''));
    if (valueAsPicoMob + fee > selectedBalance) {
      // TODO - probably want to replace this before launch
      error = t('errorFee');
    }
    return error;
  };

  // We'll use this to auto-select all text when focused. This is a better user
  // experience than having to click the left-most area to start typing (else)
  // having to spam backspace.
  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const minimumForPin = String(localStore.getMinimumForPin());
  const hashedPin = localStore.getHashedPin();

  const NO_CONTACT_SELECTED = '';

  return (
    <Formik
      initialValues={{
        contactId: NO_CONTACT_SELECTED,
        feeAmount: '0.010000000000', // TODO we need to pull this from constants
        hashedPin,
        minimumForPin,
        mobAmount: '0', // mobs
        pin: '',
        recipientPublicAddress: '',
        senderPublicAddress: mockMultipleAccounts[0].b58Code,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        mobAmount: Yup.number()
          .positive(t('positiveValidation'))
          .required(t('positiveValidationRequired')),
        recipientPublicAddress: Yup.string().required(t('addressRequired')),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
        // TODO -- I don't like this flow. The cnvenience call skips verification.
        // That means that we are "verifying" based on the front-end UI state --
        // this is pretty horrendous for a verification step in any payment flow.
        // We should, instead, display exactly what mobilecoind is about to send
        // (not what the UI thinks it is telling mobilecoind).
        // But it looks like we're going to have to gut payAddressCode and use 2
        // calls instead.

        try {
          setSlideExitSpeed(1000);
          setOpen(false);
          setSendingOpen(true);
          submitTransaction(confirmation.txProposal);

          if (isMountedRef.current) {
            const totalValueConfirmationAsMob = convertPicoMobStringToMob(
              confirmation?.totalValueConfirmation?.toString()
            );
            const totalValueConfirmationAsMobComma = commafy(totalValueConfirmationAsMob);

            enqueueSnackbar(`${t('success')} ${totalValueConfirmationAsMobComma} ${t('mob')}!`, {
              variant: 'success',
            });
            setStatus({ success: true });
            setSendingOpen(false);
            setSubmitting(false);
            resetForm();
            setIsAwaitingConformation(false);
            setConfirmation(EMPTY_CONFIRMATION);
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSendingOpen(false);
            setSubmitting(false);
            setIsAwaitingConformation(false);
            setConfirmation(EMPTY_CONFIRMATION);
          }
        }
      }}
    >
      {({
        errors,
        isSubmitting,
        dirty,
        isValid,
        resetForm,
        submitForm,
        setFieldValue,
        setSubmitting,
        setStatus,
        setErrors,
        values,
      }) => {
        // NOTE: because this is just a display for the value up to 3 dec mob,
        // We do not need the precision to be BigInt

        // eslint-disable-next-line operator-linebreak
        const selectedBalance =
          // TODO -- this is fine. we'll gut it anyway once we add multiple accounts
          // eslint-disable-next-line
          // @ts-ignore
          BigInt(
            mockMultipleAccounts.find((account) => account.b58Code === values.senderPublicAddress)
              .balance
          );

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
            {renderSenderPublicAdddressOptions(mockMultipleAccounts, isSubmitting)}
            <Box pt={4}>
              <FormLabel component="legend">
                <Typography color="primary">{t('transaction')}</Typography>
              </FormLabel>

              {listOfContacts.length > 0 && (
                <Select
                  style={{ width: '100%' }}
                  labelId="contactsList"
                  id="contactsList"
                  value={contactId}
                  displayEmpty
                  onChange={(x) => {
                    setContactId(x.target.value);
                    if (x.target.value !== NO_CONTACT_SELECTED) {
                      setFieldValue(
                        'recipientPublicAddress',
                        listOfContacts.find((z) => z.assignedAddress === x.target.value)
                          .recipientAddress
                      );
                    } else {
                      setFieldValue('recipientPublicAddress', '');
                    }
                  }}
                >
                  <MenuItem value={NO_CONTACT_SELECTED} selected>
                    Contact from list
                  </MenuItem>
                  {listOfContacts.map((contact) => (
                    <MenuItem value={contact.assignedAddress} key={contact.assignedAddress}>
                      {contact.alias}
                    </MenuItem>
                  ))}
                </Select>
              )}
              <Field
                component={TextField}
                multiline
                disabled={contactId !== NO_CONTACT_SELECTED}
                fullWidth
                label={t('recipient')}
                margin="normal"
                name="recipientPublicAddress"
                type="text"
              />
              <Field
                component={TextField}
                fullWidth
                label={t('mobAmount')}
                margin="normal"
                name="mobAmount"
                id="mobAmount"
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
                <FormHelperText error>{t('mustSync')}</FormHelperText>
              </Box>
            )}
            <SubmitButton
              disabled={!dirty || !isSynced || !isValid || isSubmitting}
              onClick={handleOpen(values, setStatus, setErrors)}
              isSubmitting={isAwaitingConformation || isSubmitting}
            >
              {isSynced ? t('send') : t('syncing')}
            </SubmitButton>
            {/* TODO - disable model if invalid */}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose(setSubmitting, resetForm)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
              }}
              disableAutoFocus
              disableEnforceFocus
            >
              <Slide in={open} timeout={{ enter: 0, exit: slideExitSpeed }}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">{t('confirm')}</h2>
                  <p id="transition-modal-description">{t('intent')}:</p>
                  <br />
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
                    <Typography color="primary">{t('amount')}:</Typography>
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
                  <br />
                  <Box display="flex">
                    <Box width="50%">
                      <Box>
                        <p className={classes.center}>{t('recipientPlus1')}</p>
                        <p className={classes.center}>{t('recipientPlus2')}</p>
                        <LongCode
                          code={confirmation?.txProposalReceiverB58Code}
                          codeClass={classes.code}
                        />
                      </Box>
                    </Box>
                    <Box width="50%">
                      <Box>
                        <p className={classes.center}>{t('senderPlus1')}</p>
                        <p className={classes.center}>{t('senderPlus2')}</p>
                        <LongCode code={values.senderPublicAddress} codeClass={classes.code} />
                      </Box>
                    </Box>
                  </Box>
                  {Number(values.mobAmount) >= Number(values.minimumForPin) && (
                    <Field
                      component={TextField}
                      fullWidth
                      label={t('enterPin')}
                      margin="normal"
                      name="pin"
                      type="text"
                    />
                  )}
                  <Box display="flex" justifyContent="space-around" padding=".5em 0">
                    <Button
                      className={classes.button}
                      color="secondary"
                      disabled={!isValid || isSubmitting}
                      onClick={handleClose(setSubmitting, resetForm)}
                      size="large"
                      fullWidth
                      type="submit"
                      variant="contained"
                    >
                      {t('cancel')}
                    </Button>
                    <Button
                      className={classes.button}
                      color="secondary"
                      disabled={
                        !isValid ||
                        isSubmitting ||
                        (Number(values.mobAmount) >= Number(values.minimumForPin) &&
                          makeHash(values.pin) !== values.hashedPin)
                      }
                      fullWidth
                      onClick={submitForm}
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      {t('confirmSend')}
                    </Button>
                  </Box>
                </div>
              </Slide>
            </Modal>
            <Modal
              className={classes.modal}
              open={sendingOpen}
              closeAfterTransition
              disableAutoFocus
              disableEnforceFocus
              disableBackdropClick
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
              }}
            >
              <Fade in={sendingOpen} timeout={{ enter: 15000, exit: 0 }}>
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

export default SendMobForm;
