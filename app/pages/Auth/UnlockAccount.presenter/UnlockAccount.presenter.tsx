import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { unlockWallet } from '../../../services/unlockWallet.service';
import { getKeychainAccounts } from '../../../utils/keytarService';
import { UnlockAccountView } from '../UnlockAccount.view';

const UnlockAccountPresenter: FC = () => {
  const { t } = useTranslation('UnlockAccountPresenter');
  const accounts = getKeychainAccounts();

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <UnlockAccountView unlockWallet={unlockWallet} accounts={accounts} />
    </>
  );
};

export default UnlockAccountPresenter;
export { UnlockAccountPresenter };
