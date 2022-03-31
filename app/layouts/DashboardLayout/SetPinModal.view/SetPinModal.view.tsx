import React, { ChangeEvent, FC } from 'react';

import {
  Box,
  FormHelperText,
  InputAdornment,
  Typography,
  makeStyles,
  Modal,
  Fade,
  Backdrop,
  Container,
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { MOBNumberFormat, SubmitButton } from '../../../components';
import { MOBIcon } from '../../../components/icons';
import { PIN_MIN_SIZE } from '../../../constants/codes';
import { useIsMountedRef } from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import { convertMobStringToPicoMobString } from '../../../utils/convertMob';
import { errorToString } from '../../../utils/errorHandler';
import { isValidPin } from '../../../utils/isValidPin';
import { SetPinModalProps } from './SetPinModal';

const useStyles = makeStyles((theme: Theme) => ({
  hiddenEntropy: {
    color: theme.palette.background.paper,
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
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
  shownEntropy: {},
}));

export const SetPinModal: FC<SetPinModalProps> = ({ isShown, onPinSubmit }: SetPinModalProps) => {
  const classes = useStyles();
  const { t } = useTranslation('SetPinModal');
  const isMountedRef = useIsMountedRef();

  const validatePin = (st: string) => (isValidPin(st) ? '' : t('errorPin'));

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isShown}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          onClose(event, reason);
        }
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
      disableAutoFocus
      disableEnforceFocus
    >
      <Fade in={isShown}>
        <Container className={classes.paper} maxWidth="sm">
          <Typography color="textPrimary" gutterBottom variant="h2">
            {t('formLabel')}
          </Typography>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            my={3}
            flexDirection="column"
          >
            <Typography variant="body2" color="textSecondary">
              {t('description')}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary">
              {t('instructions')}
            </Typography>
          </Box>
          <Box flexGrow={1} mt={3}>
            <Formik
              initialValues={{
                newPin: '',
                newPinConfirmation: '',
                pinThresholdMob: '0',
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                newPin: Yup.string().min(PIN_MIN_SIZE, t('pinSize')).required(t('pinRequired')),
                newPinConfirmation: Yup.string()
                  .oneOf([Yup.ref('newPin')], t('pinConfirmationRef'))
                  .required(t('pinConfirmationRequired')),
              })}
              onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                  setSubmitting(true);
                  /* istanbul ignore next */
                  if (isMountedRef.current) {
                    setSubmitting(false);
                    const { newPin, pinThresholdMob } = values;
                    await onPinSubmit(newPin, convertMobStringToPicoMobString(pinThresholdMob));

                    setStatus({ success: true });
                  }
                } catch (err) {
                  /* istanbul ignore next */
                  const errorMessage = errorToString(err);
                  if (isMountedRef.current) {
                    setStatus({ success: false });
                    setErrors({ submit: errorMessage });
                    setSubmitting(false);
                  }
                }
              }}
            >
              {({ errors, isSubmitting, dirty, isValid, submitForm }) => (
                <Form>
                  <Box>
                    <Field
                      id="SetPinModal-newPinField"
                      component={TextField}
                      fullWidth
                      label={t('newPinLabel')}
                      margin="normal"
                      name="newPin"
                      type="password"
                      validate={validatePin}
                    />
                    <Field
                      id="SetPinModal-newPinConfirmationField"
                      component={TextField}
                      fullWidth
                      label={t('pinConfirmationLabel')}
                      margin="normal"
                      name="newPinConfirmation"
                      type="password"
                      validate={validatePin}
                    />
                    <Field
                      component={TextField}
                      fullWidth
                      label={t('pinThreshold')}
                      margin="normal"
                      name="pinThresholdMob"
                      id="pinThresholdMob"
                      type="text"
                      onFocus={handleSelect}
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
                  <SubmitButton
                    disabled={!dirty || !isValid || isSubmitting}
                    onClick={submitForm}
                    isSubmitting={isSubmitting}
                  >
                    {t('changePinButton')}
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Fade>
    </Modal>
  );
};
