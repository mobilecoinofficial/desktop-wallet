import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { unlockWallet } from '../../../services/unlockWallet.service';
import { getKeychainAccounts } from '../../../utils/keytarService';
import { UnlockWalletView } from '../UnlockWallet.view';

const UnlockWalletPresenter: FC = () => {
  const { t } = useTranslation('UnlockWalletView');
  const accounts = getKeychainAccounts();

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <UnlockWalletView unlockWallet={unlockWallet} accounts={accounts} />
    </>
  );
};

export default UnlockWalletPresenter;
export { UnlockWalletPresenter };
