import React from 'react';
import type { FC } from 'react';

import { Box, Container, FormHelperText, makeStyles, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import { ContactIcon } from '../../../components/icons';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';
import { ContactViewProps } from './ContactView.d';

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
const ContactView: FC<ContactViewProps> = ({
  abbreviation,
  alias,
  assignedAddress,
  isFavorite,
  recipientAddress,
  onCancel,
  onDelete,
  onSaved,
}: ContactViewProps) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();

  const { t } = useTranslation('ContactView');
  const isNew = !assignedAddress;

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <h3>{isNew ? t('addTitle') : t('editTitle')}</h3>
      <Box flexGrow={1} mt={3}>
        <Formik
          initialValues={{
            abbreviation: abbreviation || '',
            alias: alias || '',
            assignedAddress: assignedAddress || '',
            button: '',
            isFavorite: !!isFavorite,
            recipientAddress: recipientAddress || '',
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            abbreviation: Yup.string().max(3, t('maxAbbreviationLength')),
            alias: Yup.string().required(t('aliasRequired')),
            recipientAddress: Yup.string(),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            if (values.button === 'back') {
              onCancel();
              return;
            }

            try {
              setSubmitting(true);
              // save contact somewhere... on failure, an error should be thrown
              if (isMountedRef.current) {
                setSubmitting(false);
                setStatus({ success: true });
                onSaved({
                  abbreviation: values.abbreviation,
                  alias: values.alias,
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
          {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => (
            <Form>
              <Box>
                <Box component="div" display="inline">
                  <ContactIcon height={32} width={32} />
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box component="div" display="inline">
                  <Field type="checkbox" name="isFavorite" />
                  <Typography display="inline">{t('isFavorite')}</Typography>
                </Box>
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
              {!isNew && (
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
    </Container>
  );
};

export default ContactView;
