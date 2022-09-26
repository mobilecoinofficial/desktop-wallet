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
  Tooltip,
  IconButton,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { SubmitButton, MOBNumberFormat, QRScanner } from '../../../components';
import { LongCode } from '../../../components/LongCode';
import { StarIcon, QRCodeIcon } from '../../../components/icons';
import { TOKENS } from '../../../constants/tokens';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import type { Theme } from '../../../theme';
import {
  convertMobStringToPicoMobString,
  convertPicoMobStringToMob,
  convertMicroUSDMToStringUSDM,
  convertUSDMStringToMicroUSDMString,
} from '../../../utils/convertMob';
import type { SendMobProps } from './SendMob.d';
import { Showing } from './SendMob.d';
import { useCurrentToken } from '../../../hooks/useCurrentToken';

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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    margin: '2rem',
    maxHeight: '-webkit-fill-available',
    maxWidth: 800,
    overflow: 'auto',
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
}));

// TODO -- right now, we can show a progress bar for the sending modal
// But, it would be nice to have a counter that parses up to, say, 10 seconds, before
// warning that it's taking a bit long...
// TODO -- we may want to refactor out the modals and feed them props just to keep
// this component managable.

const SendMob: FC<SendMobProps> = ({
  confirmation,
  contacts,
  existingPin,
  importTxConfirmation,
  isSynced,
  offlineModeEnabled,
  onClickCancel,
  onClickConfirm,
  onClickSend,
  pinThresholdPmob,
  saveTxConfirmation,
  selectedAccount,
  showing,
}: SendMobProps) => {
  const classes = useStyles();
  const { t } = useTranslation('SendMobForm');

  const [contactId, setContactId] = useState('');
  const [contactName, setContactName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isScanningQR, setIsScanningQR] = useState(false);
  const { fees } = useSelector((state: ReduxStoreState) => state);
  const token = useCurrentToken();
  const fee = fees[token.id];

  // We'll use this array in prep for future patterns with multiple accounts
  // TODO - fix the type for Account
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

  const handleChecked = () => setIsChecked(!isChecked);
  const handleScanningQR = () => setIsScanningQR(!isScanningQR);

  const handleOpen = (values) => async () => {
    const convertFunction =
      token.id === TOKENS.MOB.id
        ? convertMobStringToPicoMobString
        : convertUSDMStringToMicroUSDMString;

    onClickSend({
      accountId: selectedAccount.account.accountId,
      alias: values.alias,
      fee: convertFunction(values.feeAmount),
      isChecked,
      recipientPublicAddress: values.recipientPublicAddress,
      value: convertFunction(values.mobAmount),
    });
  };

  const handleClose = (setSubmitting: (boolean: boolean) => void, resetForm: () => void) => () => {
    setSubmitting(false);
    resetForm();
    onClickCancel();
  };

  const handleSaveConfirmation = (resetForm: () => void) => saveTxConfirmation(resetForm);

  const handleConfirmSubmit = (resetForm: () => void) => onClickConfirm(resetForm);

  const validateAmount = (selectedBalance: bigint, txFee: bigint) => (valueString: string) => {
    let error;
    const valueAsPicoMob = BigInt(valueString.replace('.', ''));
    if (valueAsPicoMob + txFee > selectedBalance) {
      // TODO - probably want to replace this before launch
      error = t('errorFee', { limit: Number(txFee) / token.precision });
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

  const feeAmount =
    token.id === TOKENS.MOB.id ? convertPicoMobStringToMob(fee) : convertMicroUSDMToStringUSDM(fee);

  const renderInput = (props) => <MOBNumberFormat token={token} convert={false} {...props} />;

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
                feeAmount,
                mobAmount: '0',
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
              onSubmit={() => {}}
            >
              {({
                errors,
                isSubmitting,
                dirty,
                handleBlur,
                isValid,
                resetForm,
                setFieldValue,
                setSubmitting,
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
                          <MenuItem value={NO_CONTACT_SELECTED} key="nocontact" selected>
                            {t('pickContact')}
                          </MenuItem>
                          {sortedContacts.map((contact) => (
                            <MenuItem
                              value={contact.assignedAddress}
                              id={`contact_${contact.assignedAddress}`}
                              key={contact.assignedAddress || contact.recipientAddress}
                            >
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
                      {isScanningQR && (
                        <QRScanner setFieldValue={setFieldValue} handleClose={handleScanningQR} />
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
                        key="recipientPublicAddress"
                        onBlur={(event) => {
                          handleBlur(event);
                          setFieldValue('recipientPublicAddress', event.target.value.trim());
                        }}
                        InputProps={{
                          startAdornment: (
                            <Tooltip
                              title="Scan a QR Code to input recipient address?"
                              placement="top-start"
                              arrow
                            >
                              <InputAdornment position="start" style={{ marginRight: '-2px' }}>
                                <IconButton
                                  data-testid="qrscan"
                                  color="inherit"
                                  edge="start"
                                  onClick={handleScanningQR}
                                >
                                  <QRCodeIcon height={20} width={20} />
                                </IconButton>
                              </InputAdornment>
                            </Tooltip>
                          ),
                        }}
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
                          BigInt(Number(values.feeAmount) * token.precision)
                        )}
                        InputProps={{
                          inputComponent: renderInput,
                          startAdornment: (
                            <InputAdornment position="start">
                              {token.icon({ height: 20, width: 20 })}
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
                      onClick={handleOpen(values)}
                      isSubmitting={/* isAwaitingConformation || */ isSubmitting}
                    >
                      {isSynced ? t('send') : t('syncing')}
                    </SubmitButton>
                    {!offlineModeEnabled && (
                      <Button onClick={importTxConfirmation}>{t('importTxConfirmation')}</Button>
                    )}
                    {/* TODO - disable model if invalid */}
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={showing === Showing.CONFIRM_FORM}
                      onClose={handleClose(setSubmitting, resetForm)}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 1000,
                      }}
                      disableAutoFocus
                      disableEnforceFocus
                    >
                      <Slide
                        in={showing === Showing.CONFIRM_FORM}
                        timeout={{ enter: 0, exit: 0 /* slideExitSpeed */ }}
                      >
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
                                id="balanceValue"
                                suffix={` ${token.name}`}
                                token={token}
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
                                id="totalValue"
                                suffix={` ${token.name}`}
                                token={token}
                                value={confirmation.totalValueConfirmation.toString()}
                              />
                            </Typography>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Typography color="textPrimary">{t('fee')}:</Typography>
                            <Typography color="textPrimary">
                              <MOBNumberFormat
                                id="feeValue"
                                suffix={` ${token.name}`}
                                token={token}
                                value={confirmation.feeConfirmation.toString()}
                              />
                            </Typography>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Typography color="textPrimary">{t('total')}:</Typography>
                            <Typography color="textPrimary">
                              <MOBNumberFormat
                                id="sentValue"
                                suffix={` ${token.name}`}
                                token={token}
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
                                id="remainingValue"
                                suffix={` ${token.name}`}
                                token={token}
                                value={remainingBalance?.toString() as string}
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
                              id="cancelSend"
                              className={classes.button}
                              color="secondary"
                              disabled={isSubmitting}
                              onClick={handleClose(setSubmitting, resetForm)}
                              size="large"
                              fullWidth
                              type="submit"
                              variant="contained"
                            >
                              {t('cancel')}
                            </Button>
                            <Button
                              id="submitSend"
                              className={classes.button}
                              color="secondary"
                              disabled={
                                isSubmitting ||
                                (isPinRequiredForTransaction && values.pin !== existingPin)
                              }
                              fullWidth
                              onClick={() => {
                                if (offlineModeEnabled) {
                                  handleSaveConfirmation(resetForm);
                                } else {
                                  handleConfirmSubmit(resetForm);
                                }
                              }}
                              size="large"
                              type="submit"
                              variant="contained"
                            >
                              {offlineModeEnabled ? t('saveTxConfirmation') : t('confirmSend')}
                            </Button>
                          </Box>
                        </div>
                      </Slide>
                    </Modal>
                    <Modal
                      className={classes.modal}
                      open={showing === Showing.SEND_FORM}
                      onClose={(event, reason) => {
                        if (reason !== 'backdropClick') {
                          onClose(event, reason);
                        }
                      }}
                      closeAfterTransition
                      disableAutoFocus
                      disableEnforceFocus
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 1000,
                      }}
                    >
                      <Fade in={showing === Showing.SEND_FORM} timeout={{ enter: 15000, exit: 0 }}>
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
