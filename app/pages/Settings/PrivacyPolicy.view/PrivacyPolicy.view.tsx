import React, { FC } from 'react';

import { Box, Breadcrumbs, Container, Link, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
import { PrivacyPolicy } from '../PrivacyPolicy.component';
import { PrivacyPolicyViewProps } from './PrivacyPolicy';

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

export const PrivacyPolicyView: FC<PrivacyPolicyViewProps> = ({
  onClickBack,
}: PrivacyPolicyViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('PrivacyPolicyView');

  return (
    <Container className={classes.cardContainer} maxWidth="md">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link color="inherit" onClick={onClickBack} component="button">
          <Typography color="textSecondary">{t('settings')}</Typography>
        </Link>
        <Typography color="textPrimary">{t('privacyPolicy')}</Typography>
      </Breadcrumbs>
      <Box my={3}>
        <PrivacyPolicy />
      </Box>
    </Container>
  );
};
