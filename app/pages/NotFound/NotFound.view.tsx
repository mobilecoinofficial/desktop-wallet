import React, { FC } from 'react';

import { Box, Button, Container, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { routePaths } from '../../constants/routePaths';
import type { Theme } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    minHeight: '100%',
    padding: theme.spacing(3),
    paddingBottom: 80,
    paddingTop: 80,
  },
}));

export const NotFoundPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('NotFoundView');

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h1" color="textPrimary">
          {t('header')}
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          {t('description')}
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <Button color="secondary" component={RouterLink} to={routePaths.ROOT} variant="outlined">
            {t('backButton')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
