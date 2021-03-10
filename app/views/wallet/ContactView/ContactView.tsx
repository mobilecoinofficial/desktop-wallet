import React from 'react';
import type { FC } from 'react';

import { Box, Container, FormHelperText, makeStyles, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { SubmitButton } from '../../../components';
import { ContactIcon } from '../../../components/icons';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import type { Theme } from '../../../theme';

export interface ContactViewProps {
  abbreviation: string;
  addressCode: string;
  contactAlias: string;
  favoriteContact: boolean;
  onCancel: () => void;
  onSaved: () => void;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
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
  };
});

// This should something else...
const ContactView: FC<ContactViewProps> = ({
  abbreviation,
  addressCode,
  contactAlias,
  favoriteContact,
  onCancel,
  onSaved,
}: ContactViewProps) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();

  const { t } = useTranslation('ContactView');
  const isNew = !addressCode;

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <h3>{isNew ? t('addTitle') : t('editTitle')}</h3>
      <Box flexGrow={1} mt={3}>
        <Formik
          initialValues={{
            abbreviation: abbreviation || '',
            addressCode: addressCode || '',
            button: '',
            contactAlias: contactAlias || '',
            favoriteContact: !!favoriteContact,
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            abbreviation: Yup.string().max(3, t('maxAbbreviationLength')),
            addressCode: Yup.string().required(t('addressCodeRequired')),
            contactAlias: Yup.string().required(t('aliasRequired')),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            console.log('SUBMITTING values=', values); // TODO: Remove!

            if (values.button === 'back') {
              onCancel();
              return;
            }

            try {
              setSubmitting(true);
              // save contact somewhere... on failure, an error should be thrown
              if (isMountedRef.current) {
                setSubmitting(false);
                enqueueSnackbar(t('enqueue'), { variant: 'success' });
                setStatus({ success: true });
                onSaved();
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
          {({ errors, isSubmitting, dirty, isValid, setFieldValue, submitForm }) => {
            return (
              <Form>
                <Box>
                  <Box component="div" display="inline">
                    <ContactIcon height={32} width={32} />
                  </Box>
                  &nbsp;&nbsp;&nbsp;
                  <Box component="div" display="inline">
                    <Field type="checkbox" name="favoriteContact" />
                    <Typography display="inline">{t('favoriteContact')}</Typography>
                  </Box>
                  <Field
                    component={TextField}
                    fullWidth
                    label={t('contactAlias')}
                    margin="normal"
                    name="contactAlias"
                    type="text"
                  />
                  <Field
                    component={TextField}
                    fullWidth
                    label={t('addressCode')}
                    margin="normal"
                    name="addressCode"
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
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
};

export default ContactView;
