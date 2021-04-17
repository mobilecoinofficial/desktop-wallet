/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Fade,
  FormHelperText,
  FormLabel,
  InputAdornment,
  LinearProgress,
  Slide,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Select,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat } from '../../../components';
import LongCode from '../../../components/LongCode';
import { StarIcon, MOBIcon } from '../../../components/icons';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import type Account from '../../../types/Account';
import { SendMobProps } from './SendMob.d';

// CBB: Shouldn't have to use this hack to get around state issues
const EMPTY_CONFIRMATION = {
  feeConfirmation: 0,
  totalValueConfirmation: 0,
  txProposal: null,
  txProposalReceiverB58Code: '',
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

const SendMob: FC<SendMobProps> = ({
  assignAddressForAccount,
  buildTransaction,
  contacts,
  existingPin,
  isSyncedBuffered,
  pinThresholdPmob,
  selectedAccount,
  submitTransaction,
  updateContacts,
}: SendMobProps) => {
  const classes = useStyles();
  const [confirmation, setConfirmation] = useState(EMPTY_CONFIRMATION);
  const { t } = useTranslation('SendMobForm');

  const [contactId, setContactId] = useState('');
  const [contactName, setContactName] = useState('');
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isAwaitingConformation, setIsAwaitingConformation] = useState(false);
  const [sendingOpen, setSendingOpen] = useState(false);
  const [slideExitSpeed, setSlideExitSpeed] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();

  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);

  const isSynced = isSyncedBuffered(networkBlockIndexBigInt, accountBlockIndexBigInt);

  // We'll use this array in prep for future patterns with multiple accounts
  // TODO - fix the type for Account
  const mockMultipleAccounts: Array<Account> = [
    {
      b58Code: selectedAccount.account.mainAddress,
      balance: selectedAccount.balanceStatus.unspentPmob,
      name: selectedAccount.account.name,
    },
  ];

  const handleChecked = () => setIsChecked(!isChecked);
  const saveToContacts = async (alias: string, recipientAddress: string) => {
    const randomColor = () => {
      const RANDOM_COLORS = ['#8B35E0', '#1F639A', '#EAA520', '#15A389', '#8D969D', '#D82E26'];
      return RANDOM_COLORS[Math.floor(RANDOM_COLORS.length * Math.random())];
    };

    const result = await assignAddressForAccount({
      accountId: selectedAccount.account.accountId,
    });

    contacts.push({
      abbreviation: alias[0].toUpperCase(),
      alias,
      assignedAddress: result.address.publicAddress,
      color: randomColor(),
      isFavorite: false,
      recipientAddress,
    });

    updateContacts(contacts);
    handleChecked();
  };

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
    handleChecked();
    resetForm();
    setIsAwaitingConformation(false);
    setConfirmation(EMPTY_CONFIRMATION);
  };

  /* FK: COMMENTING OUT BECAUSE OF NOT BEING USED
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
  */

  // TODO: Reintroduce with multiple accounts
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
  //           classes={{ label: classes.label }}
  //         />
  //       ))}
  //     </Field>
  //   </Box>
  // );

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

  const NO_CONTACT_SELECTED = '';

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
            <Box>
              <Typography variant="body1" color="textPrimary">
                {t('title')}
              </Typography>
              <Box p={1} />
              <Typography variant="body2" color="textSecondary">
                {t('description')}
              </Typography>
            </Box>
          </Box>
          <Box flexGrow={1} mt={3}>
            <Formik
              initialValues={{
                alias: '',
                contactId: NO_CONTACT_SELECTED,
                feeAmount: '0.010000000000', // TODO we need to pull this from constants
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
                      confirmation.totalValueConfirmation.toString()
                    );
                    const totalValueConfirmationAsMobComma = commafy(totalValueConfirmationAsMob);
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    isChecked ? saveToContacts(values.alias, values.recipientPublicAddress) : null;
                    enqueueSnackbar(
                      `${t('success')} ${totalValueConfirmationAsMobComma} ${t('mob')}!`,
                      {
                        variant: 'success',
                      }
                    );
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
                    mockMultipleAccounts.find(
                      (account) => account.b58Code === values.senderPublicAddress
                    ).balance
                  );

                let isPinRequiredForTransaction = false;
                if (confirmation.totalValueConfirmation) {
                  isPinRequiredForTransaction =
                    confirmation.totalValueConfirmation + confirmation.feeConfirmation >=
                    BigInt(pinThresholdPmob);
                }

                let remainingBalance;
                let totalSent = 0;
                if (confirmation.totalValueConfirmation && confirmation.feeConfirmation) {
                  remainingBalance =
                    selectedBalance -
                    (confirmation.totalValueConfirmation + confirmation.feeConfirmation);
                  totalSent = confirmation.totalValueConfirmation + confirmation.feeConfirmation;
                }

                const sortedContacts = [...contacts].sort((a, b) => {
                  if (a.isFavorite !== b.isFavorite) {
                    return a.isFavorite ? -1 : 1;
                  }
                  return a.alias.toUpperCase() > b.alias.toUpperCase() ? 1 : -1;
                });

                const truncateContact = (contact: string, len: number) => {
                  if (contact.length > len) {
                    return `${contact.slice(0, len)}...`;
                  }
                  return contact;
                };

                return (
                  <Form>
                    {/* {renderSenderPublicAdddressOptions(mockMultipleAccounts, isSubmitting)} */}
                    <Box pt={4}>
                      <FormLabel component="legend">
                        <Typography color="primary">{t('transaction')}</Typography>
                      </FormLabel>

                      {contacts.length > 0 && (
                        <Select
                          style={{ width: '100%' }}
                          labelId="contactsList"
                          id="contactsList"
                          value={contactId}
                          displayEmpty
                          onChange={(x) => {
                            setContactId(x.target.value as string);
                            if (x.target.value !== NO_CONTACT_SELECTED) {
                              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                              isChecked ? handleChecked() : null;
                              const selectedContact = contacts.find(
                                (z) => z.assignedAddress === x.target.value
                              );
                              setFieldValue(
                                'recipientPublicAddress',
                                selectedContact?.recipientAddress
                              );
                              setContactName(selectedContact?.alias as string);
                            } else {
                              setFieldValue('recipientPublicAddress', '');
                              setContactName('');
                            }
                          }}
                        >
                          <MenuItem value={NO_CONTACT_SELECTED} selected>
                            {t('pickContact')}
                          </MenuItem>
                          {sortedContacts.map((contact) => (
                            <MenuItem value={contact.assignedAddress} key={contact.assignedAddress}>
                              {contact.isFavorite ? (
                                <ListItemIcon style={{ margin: '0px' }}>
                                  <StarIcon />
                                  <ListItemText>{contact.alias} </ListItemText>
                                </ListItemIcon>
                              ) : (
                                <ListItemText>{contact.alias} </ListItemText>
                              )}
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
                          BigInt(Number(values.feeAmount) * 1_000_000_000_000)
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
                      <Field
                        component={CheckboxWithLabel}
                        type="checkbox"
                        name="showChecked"
                        checked={isChecked}
                        onChange={handleChecked}
                        disabled={
                          contactId !== NO_CONTACT_SELECTED || values.recipientPublicAddress === ''
                        }
                        Label={{ label: 'Save to contacts' }}
                      />
                      {isChecked && (
                        <Field
                          component={TextField}
                          fullWidth
                          autoFocus
                          label="Contact Alias"
                          margin="normal"
                          name="alias"
                          type="text"
                        />
                      )}
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
                      disabled={
                        !dirty ||
                        !isSynced ||
                        !isValid ||
                        isSubmitting ||
                        (isChecked && !values.alias)
                      }
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
                          <Typography color="textPrimary" variant="h2" id="transition-modal-title">
                            {t('confirm')}
                          </Typography>
                          <Typography color="textPrimary" id="transition-modal-description">
                            {t('intent')}:
                          </Typography>
                          <br />
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
                            <Typography color="primary">{t('amount')}:</Typography>
                            <Typography color="primary">
                              <MOBNumberFormat
                                suffix=" MOB"
                                valueUnit="pMOB"
                                value={confirmation.totalValueConfirmation.toString()}
                              />
                            </Typography>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Typography color="textPrimary">{t('fee')}:</Typography>
                            <Typography color="textPrimary">
                              <MOBNumberFormat
                                suffix=" MOB"
                                valueUnit="pMOB"
                                value={confirmation.feeConfirmation.toString()}
                              />
                            </Typography>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Typography color="textPrimary">{t('total')}:</Typography>
                            <Typography color="textPrimary">
                              <MOBNumberFormat
                                suffix=" MOB"
                                valueUnit="pMOB"
                                value={totalSent.toString()}
                              />
                            </Typography>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Typography color="textPrimary">---</Typography>
                            <Typography color="textPrimary">---</Typography>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Typography color="primary">{t('remaining')}:</Typography>
                            <Typography color="primary">
                              <MOBNumberFormat
                                suffix=" MOB"
                                valueUnit="pMOB"
                                value={remainingBalance?.toString()}
                              />
                            </Typography>
                          </Box>
                          <br />
                          <Box display="flex">
                            <Box width="50%" padding="1rem">
                              <Box>
                                {contactName !== '' ? (
                                  <Typography color="textPrimary" className={classes.center}>
                                    {truncateContact(contactName, 15)}
                                  </Typography>
                                ) : (
                                  <Typography color="textPrimary" className={classes.center}>
                                    {t('recipientPlus1')}
                                  </Typography>
                                )}
                                <Typography color="textPrimary" className={classes.center}>
                                  {t('recipientPlus2')}
                                </Typography>
                                <LongCode
                                  code={confirmation.txProposalReceiverB58Code}
                                  codeClass={classes.code}
                                />
                              </Box>
                            </Box>
                            <Box width="50%" padding="1rem">
                              <Box>
                                <Typography color="textPrimary" className={classes.center}>
                                  {t('senderPlus1')}
                                </Typography>
                                <Typography color="textPrimary" className={classes.center}>
                                  {t('senderPlus2')}
                                </Typography>
                                <LongCode
                                  code={values.senderPublicAddress}
                                  codeClass={classes.code}
                                />
                              </Box>
                            </Box>
                          </Box>
                          {isPinRequiredForTransaction && (
                            <Field
                              component={TextField}
                              fullWidth
                              label={t('enterPin')}
                              margin="normal"
                              name="pin"
                              type="password"
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
                                (isPinRequiredForTransaction && values.pin !== existingPin)
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
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SendMob;
export { SendMob };
