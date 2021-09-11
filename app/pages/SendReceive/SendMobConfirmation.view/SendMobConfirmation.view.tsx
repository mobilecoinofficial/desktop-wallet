import React from 'react';
import type { FC } from 'react';

import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';

import { MOBNumberFormat } from '../../../components';
import { LongCode } from '../../../components/LongCode';
import type { Theme } from '../../../theme';
import type { SendMobConfirmationProps } from './SendMobConfirmation.d';

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

const SendMobConfirmation: FC<SendMobConfirmationProps> = ({
  confirmation,
  contactName,
  existingPin,
  handleClose,
  handleConfirmSubmit,
  handleSaveConfirmation,
  isPinRequiredForTransaction,
  isSubmitting,
  offlineModeEnabled,
  remainingBalance,
  resetForm,
  selectedBalance,
  setSubmitting,
  totalSent,
  values,
}: SendMobConfirmationProps) => {
  const classes = useStyles();
  const { t } = useTranslation('SendMobConfirmation');

  const truncateContact = (contact: string, len: number) =>
    contact.length > len ? `${contact.slice(0, len)}...` : contact;

  return (
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
            id="totalValue"
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
            id="feeValue"
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
            id="sentValue"
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
            id="remainingValue"
            suffix=" MOB"
            valueUnit="pMOB"
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
            <LongCode code={confirmation.txProposalReceiverB58Code} codeClass={classes.code} />
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
            <LongCode code={values.senderPublicAddress} codeClass={classes.code} />
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
          f
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
          disabled={isSubmitting || (isPinRequiredForTransaction && values.pin !== existingPin)}
          fullWidth
          onClick={() =>
            offlineModeEnabled ? handleSaveConfirmation(resetForm) : handleConfirmSubmit(resetForm)
          }
          size="large"
          type="submit"
          variant="contained"
        >
          {offlineModeEnabled ? t('saveTxConfirmation') : t('confirmSend')}
        </Button>
      </Box>
    </div>
  );
};

export default SendMobConfirmation;
export { SendMobConfirmation };
