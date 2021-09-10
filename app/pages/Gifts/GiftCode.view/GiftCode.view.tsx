import React from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { AccountCard } from '../../../components/AccountCard';
import { SubmitButton } from '../../../components/SubmitButton';
import type { Theme } from '../../../theme';
import type { GiftCodeProps } from './GiftCode.d';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4),
  },
}));

const GiftCode: FC<GiftCodeProps> = ({ giftCode, onClickCode, onCloseClick }: GiftCodeProps) => {
  const { t } = useTranslation('GiftingView');
  const classes = useStyles();

  return (
    <Container className={classes.paper}>
      <Box py={2}>
        <AccountCard isGift account={{ b58Code: giftCode }} onClickCode={onClickCode} />
        <SubmitButton onClick={onCloseClick}>{t('close')}</SubmitButton>
      </Box>
    </Container>
  );
};

export default GiftCode;
export { GiftCode };
