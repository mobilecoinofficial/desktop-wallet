import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Button,
  createStyles,
  FormHelperText,
  makeStyles,
  Modal,
  Typography,
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import type { Theme } from '../../theme';
import { MOBIcon } from '../icons';

export interface AddPasswordToKeychainModalProps {
  onClose: () => void;
  onSave: (accountName: string, password: string) => void;
  open: boolean;
  password: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonBox: {
      justifyContent: 'flex-end',
    },
    form: {
      backgroundColor: theme.palette.background.dark,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      padding: '10px 25px',
      width: '300px',
    },
    icon: {
      paddingRight: '10px',
    },
    modal: {
      alignItems: 'flex-start',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    pwBox: {
      backgroundColor: theme.palette.background.default,
      marginBottom: '5px',
      marginTop: '5px',
      padding: '0px 15px',
    },
    pwLenText: {
      color: theme.palette.text.primary,
    },
    title: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
    },
  })
);

const AddPasswordToKeychainModal: FC<AddPasswordToKeychainModalProps> = ({
  onClose,
  onSave,
  open,
  password,
}: AddPasswordToKeychainModalProps) => {
  const classes = useStyles();
  const initialValues = {
    accountName: '',
    submit: null,
  };

  const validationSchema = Yup.object().shape({
    accountName: Yup.string().required('Account Name Required'),
  });

  const onCloseHandler = () => onClose();
  const onSaveHandler = (values: { accountName: string }) => onSave(values.accountName, password);

  return (
    <Modal className={classes.modal} open={open} hideBackdrop>
      <Formik
        initialValues={initialValues}
        onSubmit={onSaveHandler}
        validationSchema={validationSchema}
      >
        {({ dirty, errors, isValid, submitForm }) => {
          return (
            <Form name="SavePasswordForm" className={classes.form}>
              <Box display="flex" flexDirection="column">
                <Typography className={classes.title}>Save Password to Keychain?</Typography>
                <Box
                  className={classes.pwBox}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  <MOBIcon className={classes.icon} height={35} width={35} />
                  <Box display="flex" flexDirection="column">
                    <Field
                      id="accountName"
                      component={TextField}
                      label="Account Name"
                      name="accountName"
                    />
                    <Box pt={1} display="flex">
                      <Box>
                        <Typography className={classes.pwLenText} display="inline">
                          {'*'.repeat(password.length)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box display="flex" flexDirection="row" className={classes.buttonBox}>
                  <Button color="primary" onClick={onCloseHandler}>
                    Not Now
                  </Button>
                  <Button disabled={!dirty || !isValid} onClick={submitForm}>
                    Save
                  </Button>
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

AddPasswordToKeychainModal.defaultProps = {
  onClose: () => {},
  onSave: () => {},
  open: false,
  password: '',
};

export default AddPasswordToKeychainModal;
