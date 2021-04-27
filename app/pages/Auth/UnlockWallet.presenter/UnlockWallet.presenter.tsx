import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import UnlockWalletForm, { unlockWalletFormOnSubmit } from '../UnlockWallet.view/UnlockWallet.view';

const UnlockWalletPresenter: FC = () => {
  const [t] = useTranslation('UnlockWalletView');

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <UnlockWalletForm onSubmit={unlockWalletFormOnSubmit} />
    </>
  );
};

export default UnlockWalletPresenter;
export { UnlockWalletPresenter };
