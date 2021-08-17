import React from 'react';
import type { FC, ReactNode } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { ShortCode, SubmitButton } from '../../../components';
import { TransactionInfoLabel } from '../../../components/TransactionInfoLabel';
import { CopyIcon } from '../../../components/icons';
import type { Theme } from '../../../theme';
import type { TransactionDetailsViewProps } from './TransactionDetails.d';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  internal: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  negative: {
    color: theme.palette.number.negative,
    fontWeight: 'bold',
  },
  root: { padding: theme.spacing(0, 5) },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
}));

const TransactionDetails: FC<TransactionDetailsViewProps> = ({
  onClickCopyConfirmations,
  onClickBack,
  transactionLog,
  txos,
}: TransactionDetailsViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('TransactionDetails');

  const {
    // comment,
    contact,
    direction,
    finalizedBlockIndex,
    assignedAddressId,
    recipientAddressId,
    outputTxoIds,
    // transactionLogId,
    valuePmob,
  } = transactionLog;

  const sign = direction === 'tx_direction_sent' ? '-' : '+';

  // TODO replace this with a component
  const renderRow = (title: string, value: string | ReactNode, noWrap?: boolean) => (
    <Box className={classes.internal} key={title}>
      <Typography className={classes.textLeft} display="inline" noWrap={noWrap}>
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

  const renderSenderOrReceiver = () => {
    let aliasOrAddress: string | ReactNode;
    if (assignedAddressId || recipientAddressId) {
      aliasOrAddress = contact ? (
        contact.alias
      ) : (
        <ShortCode code={assignedAddressId || recipientAddressId || ''} />
      );
    } else {
      aliasOrAddress = (
        <Typography className={classes?.negative} display="inline">
          {t('orphaned')}
        </Typography>
      );
    }

    let label = t('recipient');
    if (sign === '+') {
      label = contact ? t('sender') : t('address');
    }

    return renderRow(`${label}:`, aliasOrAddress);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="body2" color="textPrimary">
          {t('transactionDetails')}
        </Typography>
        <CardContent>
          {renderRow(`${t('blockHeight')}:`, finalizedBlockIndex)}
          {renderSenderOrReceiver()}
          {renderRow(
            `${t('amount')}:`,
            <TransactionInfoLabel valuePmob={valuePmob} sign={sign} label=" MOB" />
          )}
        </CardContent>
      </Card>

      <Card className={classes.card}>
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
              />,
              true
            )
          )}
        </CardContent>
      </Card>

      {sign === '+' && !assignedAddressId && (
        <Card className={classes.card}>
          <Typography variant="body2" className={classes?.negative}>
            {t('orphanedTitle')}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textPrimary">
              {t('orphanedExplaination')}
            </Typography>
            <Box pt={1} />
            <Typography variant="body2" color="textPrimary">
              {t('recoveryInstructions')}
            </Typography>
          </CardContent>
        </Card>
      )}
      {direction === 'tx_direction_sent' ? (
        <Button id="copyReceipts" onClick={onClickCopyConfirmations}>
          <CopyIcon />
          <Typography color="textPrimary">Copy Confirmation(s)</Typography>
        </Button>
      ) : (
        <></>
      )}
      <SubmitButton disabled={false} isSubmitting={false} onClick={onClickBack}>
        {t('buttons.back')}
      </SubmitButton>
    </Container>
  );
};

export default TransactionDetails;
export { TransactionDetails };
