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
  open: boolean;
  passwordLength: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonBox: {
      alignItems: 'baseline',
      justifyContent: 'space-evenly',
    },
    form: {
      backgroundColor: theme.palette.background.dark,
      padding: '10px',
      width: '250px',
    },
    icon: {
      paddingRight: '10px',
    },
    pwBox: {
      backgroundColor: theme.palette.background.default,
      marginBottom: '5px ',
      padding: '0px 15px',
    },
    pwLenText: {
      color: theme.palette.text.primary,
    },
    titleText: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
    },
  })
);

const AddPasswordToKeychainModal: FC<AddPasswordToKeychainModalProps> = ({
  open,
  passwordLength,
}: AddPasswordToKeychainModalProps) => {
  const classes = useStyles();
  const initialValues = {
    accountName: '',
    submit: null,
  };

  const validationSchema = Yup.object().shape({
    accountName: Yup.string().required('Account Name Required'),
  });

  return (
    <Modal open={open} aria-labelledby="simple-modal" aria-describedby="simple-modal-desc">
      <Formik initialValues={initialValues} onSubmit={() => {}} validationSchema={validationSchema}>
        {({ dirty, errors, isValid }) => {
          return (
            <Form name="SavePasswordForm" className={classes.form}>
              <Box display="flex" flexDirection="column">
                <Typography className={classes.titleText}>Save Password to Keychain?</Typography>
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
                          {'*'.repeat(passwordLength)}
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
                  <Button color="primary">Not Now</Button>
                  <Button disabled={!dirty || !isValid}>Add</Button>
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
  open: false,
  passwordLength: 10,
};

export default AddPasswordToKeychainModal;
