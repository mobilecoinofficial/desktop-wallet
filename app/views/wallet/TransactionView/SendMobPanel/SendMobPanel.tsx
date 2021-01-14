import React from 'react';
import type { FC } from 'react';

import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import SendMobForm from './SendMobForm';

const SendMobPanel: FC = () => {
  const { t } = useTranslation('SendMobPanel');

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
            <Box>
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
            <SendMobForm />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SendMobPanel;
