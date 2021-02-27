import React from 'react';
import type { FC } from 'react';

import { Box, Card, CardContent, Container, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import SubmitButton from '../../../components/SubmitButton';
import type { Theme } from '../../../theme';

export interface TransactionDetailsViewProps {
  amount: number;
  dateTime: Date;
  direction: string;
  name: string;
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
    negative: {
      color: theme.palette.number.negative,
    },
    positive: {
      color: theme.palette.number.positive,
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
  dateTime,
  // direction,
  name,
  onClickBack,
  sign,
}: // status,
TransactionDetailsViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('TransactionDetails');

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
                <Typography
                  className={`${classes.textRight} ${
                    sign === '+' ? classes.positive : classes.negative
                  }`}
                  display="inline"
                >
                  {sign}
                  {amount}&nbsp;MOB
                </Typography>
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
                  <Typography
                    className={`${classes.textRight} ${
                      sign === '+' ? classes.positive : classes.negative
                    }`}
                    display="inline"
                  >
                    {sign} ??? MOB &gt;
                  </Typography>
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
            <br />
            <br />
            <br />
            <br />
            <br />
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
