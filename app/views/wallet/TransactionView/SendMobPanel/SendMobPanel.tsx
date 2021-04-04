import React from 'react';
import type { FC } from 'react';

import { Box, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import SendMobForm from './SendMobForm';

const SendMobPanel: FC = () => {
  const { t } = useTranslation('SendMobPanel');

  return (
    <Container maxWidth="sm">
      <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="body2" color="textSecondary">
            {t('header')}
          </Typography>
        </Box>
      </Box>
      <Box flexGrow={1} mt={3}>
        <SendMobForm />
      </Box>
    </Container>
  );
};

export default SendMobPanel;
