import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { CirclePicker } from 'react-color';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton, StarCheckbox } from '../../../components';
import { RANDOM_COLORS } from '../../../constants/app';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import { ContactFormProps } from './ContactForm';

interface CirclePickerType {
  hex: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 200,
  },
  cardContainer: {
    paddingBottom: 64,
    paddingTop: 8 * 4,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    padding: theme.spacing(4),
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
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

// This should something else...
const ContactForm: FC<ContactFormProps> = ({
  abbreviation,
  alias,
  assignedAddress,
  color,
  isFavorite,
  recipientAddress,
  onCancel,
  onDelete,
  onSaved,
}: ContactFormProps) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();

  const [showPicker, setShowPicker] = useState(false);

  const { t } = useTranslation('ContactForm');
  const isNew = !assignedAddress;

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h3">{isNew ? t('addTitle') : t('editTitle')}</Typography>
          <Box flexGrow={1} mt={3}>
            <Formik
              initialValues={{
                abbreviation: abbreviation || '',
                alias: alias || '',
                assignedAddress: assignedAddress || '',
                button: '',
                color: color || '',
                isFavorite: !!isFavorite,
                recipientAddress: recipientAddress || '',
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                abbreviation: Yup.string().max(2, t('maxAbbreviationLength')),
                alias: Yup.string().required(t('aliasRequired')),
                recipientAddress: Yup.string().required(t('addressCodeRequired')),
              })}
              onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                if (values.button === 'back') {
                  onCancel();
                  return;
                }

                try {
                  setSubmitting(true);
                  if (isMountedRef.current) {
                    setSubmitting(false);
                    setStatus({ success: true });
                    onSaved({
                      abbreviation: values.abbreviation,
                      alias: values.alias,
                      color: values.color,
                      isFavorite: values.isFavorite,
                      recipientAddress: values.recipientAddress,
                    });
                  }
                } catch (err) {
                  if (isMountedRef.current) {
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                  }
                }
              }}
            >
              {({ values, errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => (
                <Form>
                  <Box>
                    <Box style={{ display: 'flex' }}>
                      <Avatar
                        style={{ backgroundColor: values.color || '#757575' }}
                        onClick={() => setShowPicker(true)}
                      >
                        {values.abbreviation}
                      </Avatar>
                      <Field
                        display="inline"
                        type="checkbox"
                        name="isFavorite"
                        component={StarCheckbox}
                      />
                      <Typography display="inline" style={{ position: 'relative', top: '12px' }}>
                        {t('isFavorite')}
                      </Typography>
                    </Box>
                    {showPicker && (
                      <Dialog open={showPicker}>
                        <DialogTitle id="alert-dialog-title">{t('pickColor')}</DialogTitle>
                        <DialogContent style={{ overflowY: 'hidden' }}>
                          <CirclePicker
                            colors={RANDOM_COLORS}
                            onChange={(pickedColor: CirclePickerType) => {
                              setFieldValue('color', pickedColor.hex);
                              setShowPicker(false);
                            }}
                          />
                        </DialogContent>
                        <DialogActions style={{ height: '100%' }}>
                          <Button onClick={() => setShowPicker(false)} color="primary" autoFocus>
                            {t('cancel')}
                          </Button>
                        </DialogActions>
                      </Dialog>
                    )}
                    <Field
                      component={TextField}
                      fullWidth
                      label={t('alias')}
                      margin="normal"
                      name="alias"
                      type="text"
                    />
                    <Field
                      component={TextField}
                      fullWidth
                      label={t('abbreviation')}
                      margin="normal"
                      name="abbreviation"
                      type="text"
                    />
                    {assignedAddress && (
                      <Field
                        disabled
                        component={TextField}
                        fullWidth
                        multiline
                        label={t('assignedAddress')}
                        margin="normal"
                        name="assignedAddress"
                        type="text"
                      />
                    )}{' '}
                    <Field
                      component={TextField}
                      fullWidth
                      multiline
                      label={t('recipientAddress')}
                      margin="normal"
                      name="recipientAddress"
                      type="text"
                    />
                  </Box>
                  {errors.submit && (
                    <Box mt={3}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )}
                  <SubmitButton
                    disabled={false}
                    onClick={() => {
                      setFieldValue('button', 'back');
                      onCancel();
                    }}
                    isSubmitting={isSubmitting}
                  >
                    {t('cancel')}
                  </SubmitButton>
                  {!isNew && onDelete && (
                    <SubmitButton
                      disabled={false}
                      onClick={() => {
                        setFieldValue('button', 'back');
                        onDelete();
                      }}
                      isSubmitting={isSubmitting}
                    >
                      {t('removeContact')}
                    </SubmitButton>
                  )}
                  <SubmitButton
                    disabled={!dirty || !isValid || isSubmitting}
                    onClick={() => {
                      setFieldValue('button', 'save');
                      submitForm();
                    }}
                    isSubmitting={isSubmitting}
                  >
                    {isNew ? t('addContact') : t('editContact')}
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactForm;
export { ContactForm };
