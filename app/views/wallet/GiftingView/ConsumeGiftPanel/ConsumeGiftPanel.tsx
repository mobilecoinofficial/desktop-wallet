import React from 'react';
import type { FC } from 'react';

import { Box, Card, CardContent, Container, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ConsumeGiftForm from './ConsumeGiftForm';

const useStyles = makeStyles(() => ({
  mobContainer: {
    alignSelf: 'center',
    display: 'flex',
    paddingRight: 4,
  },
  root: {},
  valueContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ConsumeGiftPanel: FC = () => {
  const classes = useStyles();

  const { t } = useTranslation('ConsumeGiftPanel');

  return (
    <Container className={classes.root} maxWidth="sm">
      <Card>
        <CardContent>
          <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
            <Box width="100%">
              <Typography variant="body1" color="textPrimary">
                {t('title')}
              </Typography>
              <Box p={1} />
              <Typography variant="body2" color="textSecondary">
                {t('description')}
              </Typography>
            </Box>
          </Box>
          <Box flexGrow={1} mt={3}>
            <ConsumeGiftForm />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ConsumeGiftPanel;
