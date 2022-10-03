import React from 'react';
import type { FC, ReactNode } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useTranslation } from 'react-i18next';

import { ShortCode, SubmitButton } from '../../../components';
import { TransactionInfoLabel } from '../../../components/TransactionInfoLabel';
import { TOKENS } from '../../../constants/tokens';
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
  onClickValidateConfirmations,
  transactionLog,
  txoValidations,
}: TransactionDetailsViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('TransactionDetails');

  const {
    contact,
    direction,
    finalizedBlockIndex,
    address,
    outputTxoIds,
    value: transactionValue,
    tokenId,
  } = transactionLog;

  const sign = direction === 'tx_direction_sent' ? '-' : '+';

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

  const renderTXODetailsRow = (
    title: string,
    value: string | ReactNode,
    validated?: boolean,
    noWrap?: boolean
  ) => (
    <Box className={classes.internal} key={title}>
      {
        // eslint-disable-next-line no-nested-ternary
        validated === undefined ? (
          <Tooltip title={t('noValidation')}>
            <RemoveCircleIcon color="action" />
          </Tooltip>
        ) : validated ? (
          <Tooltip title={t('validated')}>
            <CheckCircleIcon color="primary" />
          </Tooltip>
        ) : (
          <Tooltip title={t('invalid')}>
            <ErrorIcon color="error" />
          </Tooltip>
        )
      }
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
    if (address) {
      aliasOrAddress = contact ? contact.alias : <ShortCode code={address || ''} />;
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
          {renderRow(`${t('blockHeight')}:`, finalizedBlockIndex ?? 'unknown')}
          {renderSenderOrReceiver()}
          {renderRow(
            `${t('amount')}:`,
            <TransactionInfoLabel
              value={transactionValue}
              sign={sign}
              label={` ${Object.values(TOKENS).find((token) => token.id === tokenId)?.name}`}
            />
          )}
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <Typography variant="body2" color="textPrimary">
          {t('txoDetails')}
        </Typography>
        <CardContent>
          {outputTxoIds.map((txoId) =>
            direction === 'tx_direction_sent'
              ? renderRow(`ID: ${txoId}`, undefined, true)
              : renderTXODetailsRow(`ID: ${txoId}`, undefined, txoValidations[txoId], true)
          )}
        </CardContent>
      </Card>

      {sign === '+' && !address && (
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
        <Button id="copyConfirmations" onClick={onClickCopyConfirmations}>
          <Typography color="textPrimary">{t('copyConfirmations')}</Typography>
        </Button>
      ) : (
        <Button id="validateConfirmations" onClick={onClickValidateConfirmations}>
          <Typography color="textPrimary">{t('validateConfirmations')}</Typography>
        </Button>
      )}
      <SubmitButton disabled={false} isSubmitting={false} onClick={onClickBack}>
        {t('buttons.back')}
      </SubmitButton>
    </Container>
  );
};

export default TransactionDetails;
export { TransactionDetails };
