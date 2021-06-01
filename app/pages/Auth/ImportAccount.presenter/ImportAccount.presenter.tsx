import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { importAccount, importLegacyAccount } from '../../../services';
import { setKeychainAccount } from '../../../utils/keytarService';
import { ImportAccountView } from '../ImportAccount.view/ImportAccount.view';

const ImportAccountPresenter: FC = () => {
  const { t } = useTranslation('ImportAccountView');

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
      <ImportAccountView
        importAccount={importAccount}
        importLegacyAccount={importLegacyAccount}
        setKeychainAccount={setKeychainAccount}
      />
    </>
  );
};

export default ImportAccountPresenter;
export { ImportAccountPresenter };
