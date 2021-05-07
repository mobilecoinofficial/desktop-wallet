import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useFullService from '../../../hooks/useFullService';
import { ImportAccountView } from '../ImportAccount.view/ImportAccount.view';

const ImportAccountPresenter: FC = () => {
  const { t } = useTranslation('ImportAccountView');
  const { importAccount, importLegacyAccount } = useFullService();

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('header')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        {t('warning')}
      </Typography>
      <Typography variant="body2" color="textPrimary" paragraph>
        {t('legacyHex')}
      </Typography>
      <ImportAccountView importAccount={importAccount} importLegacyAccount={importLegacyAccount} />
    </>
  );
};

export default ImportAccountPresenter;
export { ImportAccountPresenter };
