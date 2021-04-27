import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import {
  ImportAccountView,
  importAccountFormOnSubmit,
} from '../ImportAccount.view/ImportAccount.view';

// CBB: this isTest pattern would be better managed with context and hooks.
interface ImportAccountViewProps {
  isTest?: boolean;
}

const ImportAccountPresenter: FC<ImportAccountViewProps> = ({ isTest }: ImportAccountViewProps) => {
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
      <ImportAccountView isTest={isTest} onSubmit={importAccountFormOnSubmit} />
    </>
  );
};

ImportAccountPresenter.defaultProps = {
  isTest: false,
};

export default ImportAccountPresenter;
export { ImportAccountPresenter };
