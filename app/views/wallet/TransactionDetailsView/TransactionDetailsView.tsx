import React from 'react';
import type { FC } from 'react';

import { Box, Card, CardContent, Container, makeStyles, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { SubmitButton, TransactionInfoLabel } from '../../../components';
import type { Theme } from '../../../theme';

export interface TransactionDetailsViewProps {
  amount: number;
  comment: string;
  dateTime: Date;
  direction: string;
  id: string;
  name: string;
  onChangedComment: any;
  onClickBack: any;
  sign: string;
  status: string;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      padding: '10px',
    },
    internal: {
      backgroundColor: theme.palette.background.dark,
      display: 'flex',
      flexDirection: 'row',
      margin: '5px',
      padding: '5px',
    },
    root: {
      minHeight: '100%',
      padding: theme.spacing(1),
    },
    textLeft: { textAlign: 'left' },
    textRight: { textAlign: 'right', width: '100%' },
  };
});

const TransactionDetailsView: FC<TransactionDetailsViewProps> = ({
  amount,
  comment,
  dateTime,
  id,
  // direction, status
  name,
  onChangedComment,
  onClickBack,
  sign,
}: TransactionDetailsViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('TransactionDetails');
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Container maxWidth="sm" style={{ padding: '0' }}>
      <Box>
        <Container className={classes.container} fixed maxWidth="sm">
          <Card className={classes.root}>
            <CardContent>
              <Box className={classes.internal}>
                <Typography className={classes.textLeft} display="inline">
                  {`${t('date')}:`}
                </Typography>
                <Typography className={classes.textRight} display="inline">
                  {dateTime.toLocaleDateString()}
                </Typography>
              </Box>
              <Box className={classes.internal}>
                <Typography className={classes.textLeft} display="inline">
                  {`${t('time')}:`}
                </Typography>
                <Typography className={classes.textRight} display="inline">
                  {dateTime.toLocaleTimeString()}
                </Typography>
              </Box>
              <Box className={classes.internal}>
                <Typography className={classes.textLeft} display="inline">
                  {`${sign === '+' ? t('sender') : t('recipient')}:`}
                </Typography>
                <Typography className={classes.textRight} display="inline">
                  {name}
                </Typography>
              </Box>
              <Box className={classes.internal}>
                <Typography className={classes.textLeft} display="inline">
                  {`${t('amount')}:`}
                </Typography>
                <TransactionInfoLabel amount={amount} sign={sign} label="&nbsp;MOB" />
              </Box>
            </CardContent>
          </Card>
        </Container>

        <Container className={classes.container} fixed maxWidth="sm">
          <Card className={classes.root}>
            <Typography variant="body2" color="textPrimary">
              {t('txoDetails')}
            </Typography>
            <CardContent>
              {[1, 2, 3].map((x) => (
                <Box className={classes.internal} key={x}>
                  <Typography className={classes.textLeft} display="inline">
                    TXO&nbsp;#{x}
                  </Typography>
                  <TransactionInfoLabel sign={sign} label=" MOB &gt;" />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Container>

        <Container className={classes.container} fixed maxWidth="sm">
          <Card className={classes.root}>
            <Typography variant="body2" color="textPrimary">
              {t('addComment')}
            </Typography>

            <Formik
              initialValues={{
                newComment: comment,
                submit: null,
              }}
              onSubmit={(values, { setSubmitting, setStatus }) => {
                setSubmitting(true);
                onChangedComment(id, values.newComment);
                setTimeout(() => {
                  setSubmitting(false);
                  enqueueSnackbar(t('savedComment'), { variant: 'success' });
                  setStatus({ success: true });
                }, 1500);
              }}
            >
              {({ isSubmitting, dirty, isValid, submitForm }) => {
                return (
                  <Form>
                    <Box>
                      <Field
                        component={TextField}
                        fullWidth
                        label={t('typeHere')}
                        margin="normal"
                        name="newComment"
                        type="text"
                      />
                    </Box>{' '}
                    <Box paddingLeft={10} paddingRight={10}>
                      <SubmitButton
                        disabled={!dirty || !isValid || isSubmitting}
                        onClick={submitForm}
                        isSubmitting={isSubmitting}
                      >
                        {t('changeComment')}
                      </SubmitButton>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Container>
        <SubmitButton disabled={false} isSubmitting={false} onClick={onClickBack}>
          {t('buttons.back')}
        </SubmitButton>
      </Box>
    </Container>
  );
};

export default TransactionDetailsView;
