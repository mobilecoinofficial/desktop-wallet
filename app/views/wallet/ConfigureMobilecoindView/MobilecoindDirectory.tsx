import React from 'react';
import type { FC } from 'react';

import { Box, FormLabel, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useMobilecoindConfigs from '../../../hooks/useMobilecoindConfigs';

const MobilecoindDirectory: FC = () => {
  const { ledgerDbPath, mobilecoindDbPath } = useMobilecoindConfigs();
  const { t } = useTranslation('MobilecoindDirectory');

  return (
    <Box flexGrow={1} mt={3}>
      <Box pt={3}>
        <FormLabel component="legend">
          <Typography color="primary">{t('formLabel')}</Typography>
        </FormLabel>
      </Box>
      <Box pt={2}>
        <Box py={1} />
        <Typography variant="body2" color="textPrimary">
          {t('ledgerDbPathHeader')}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${ledgerDbPath}`}
        </Typography>
        <Box py={1} />
        <Typography variant="body2" color="textPrimary">
          {t('mobilecoindDbPathHeader')}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${mobilecoindDbPath}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default MobilecoindDirectory;
