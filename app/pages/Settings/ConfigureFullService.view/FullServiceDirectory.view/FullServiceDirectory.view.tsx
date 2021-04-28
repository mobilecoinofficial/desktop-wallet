import React from 'react';
import type { FC } from 'react';

import { Box, FormLabel, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { FullServiceDirectoryProps } from './FullServiceDirectory';

const FullServiceDirectory: FC<FullServiceDirectoryProps> = ({
  ledgerDbPath,
  fullServiceDbPath,
}: FullServiceDirectoryProps) => {
  const { t } = useTranslation('FullServiceDirectory');

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
          {t('fullServiceDbPathHeader')}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`${fullServiceDbPath}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default FullServiceDirectory;
export { FullServiceDirectory };
