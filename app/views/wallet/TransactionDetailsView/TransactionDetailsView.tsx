import React from 'react';
import type { FC, ReactNode } from 'react';

import { Box, Card, CardContent, Container, makeStyles, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { ShortCode, SubmitButton } from '../../../components';
import TransactionInfoLabel from '../../../components/TransactionInfoLabel/TransactionInfoLabel';
import type { Theme } from '../../../theme';
import { TransactionDetailsViewProps } from './TransactionDetailsView.d';

const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      padding: '10px',
    },
    internal: {
      backgroundColor: theme.palette.background.dark,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '5px',
      padding: '5px',
    },
    root: {
      minHeight: '100%',
      padding: theme.spacing(1),
    },
    textLeft: { textAlign: 'left' },
    textRight: { textAlign: 'right' },
  };
});

const TransactionDetailsView: FC<TransactionDetailsViewProps> = ({
  onChangedComment,
  onClickBack,
  transactionLog,
  txos,
}: TransactionDetailsViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('TransactionDetails');
  const { enqueueSnackbar } = useSnackbar();

  const {
    comment,
    direction,
    finalizedBlockIndex,
    assignedAddressId,
    recipientAddressId, // TODO -- add sent logic
    outputTxoIds,
    transactionLogId,
    valuePmob,
  } = transactionLog;
  // const { selectedAccount, txos, fetchAllTxosForAccount } = useFullService(); // ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8

  // fetchAllTxosForAccount(selectedAccount.account.accountId);
  // TODO -- make this view an actual view

  const sign = direction === 'tx_direction_sent' ? '-' : '+';

  // TODO replace this with a component
  const renderRow = (title: string, value: string | ReactNode) => {
    return (
      <Box className={classes.internal} key={title}>
        <Typography className={classes.textLeft} display="inline" noWrap>
          {title}
        </Typography>
        {typeof value === 'string' ? (
          <Typography className={classes.textRight} display="inline">
            {value}
          </Typography>
        ) : (
          value
        )}
      </Box>
    );
  };

  return (
    <Container maxWidth="md" style={{ padding: '0' }}>
      <Box>
        <Container className={classes.container} fixed maxWidth="md">
          <Card className={classes.root}>
            <Typography variant="body2" color="textPrimary">
              {t('transactionDetails')}
            </Typography>
            <CardContent>
              {renderRow(`${t('blockHeight')}:`, finalizedBlockIndex)}
              {renderRow(
                `${sign === '+' ? t('sender') : t('recipient')}:`,
                <ShortCode code={assignedAddressId} />
              )}
              {renderRow(
                `${t('amount')}:`,
                <TransactionInfoLabel valuePmob={valuePmob} sign={sign} label=" MOB" />
              )}
            </CardContent>
          </Card>
        </Container>

        <Container className={classes.container} fixed maxWidth="md">
          <Card className={classes.root}>
            <Typography variant="body2" color="textPrimary">
              {t('txoDetails')}
            </Typography>
            <CardContent>
              {outputTxoIds.map((txoId) =>
                renderRow(
                  txoId,
                  <TransactionInfoLabel
                    valuePmob={txos.txoMap[txoId].valuePmob}
                    sign={sign}
                    label=" MOB"
                  />
                )
              )}
            </CardContent>
          </Card>
        </Container>

        <Container className={classes.container} fixed maxWidth="md">
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
                onChangedComment(transactionLogId, values.newComment);
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
