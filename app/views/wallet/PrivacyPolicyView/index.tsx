import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { PrivacyPolicy } from '../../../components';
import routePaths from '../../../constants/routePaths';
import type { Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => {
  return {
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
  };
});

const PrivacyPolicyView: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardContainer} maxWidth="md">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link
          color="inherit"
          to={routePaths.APP_SETTINGS}
          component={RouterLink}
        >
          <Typography color="textSecondary">Settings</Typography>
        </Link>
        <Typography color="textPrimary">Privacy Policy</Typography>
      </Breadcrumbs>
      <Box my={3}>
        <PrivacyPolicy />
      </Box>
    </Container>
  );
};

export default PrivacyPolicyView;
