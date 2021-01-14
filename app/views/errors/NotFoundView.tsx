import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import routePaths from '../../constants/routePaths';
import type { Theme } from '../../theme';

const useStyles = makeStyles((theme: Theme) => {
  return {
    image: {
      height: 'auto',
      maxHeight: 300,
      maxWidth: '100%',
      width: 560,
    },
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.background.dark,
      display: 'flex',
      minHeight: '100%',
      padding: theme.spacing(3),
      paddingBottom: 80,
      paddingTop: 80,
    },
  };
});

const NotFoundView: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h1" color="textPrimary">
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          You should never see this page. If you do, an engineer messed up.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            color="secondary"
            component={RouterLink}
            to={routePaths.ROOT}
            variant="outlined"
          >
            Back to home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundView;
