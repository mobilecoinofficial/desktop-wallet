import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useTranslation } from 'react-i18next';

import useFullService from '../../../hooks/useFullService';
import { UnlockWalletView } from '../UnlockWallet.view';

const UnlockWalletPresenter: FC = () => {
  const { t } = useTranslation('UnlockWalletView');
  const { unlockWallet } = useFullService();
  const makePassword = (accountName: string, password: string) =>
    ipcRenderer.send('set-password', accountName, password);
  const getPassword = (accountName: string) => ipcRenderer.invoke('get-password', accountName);

  return (
    <>
      <Typography variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <UnlockWalletView
        unlockWallet={unlockWallet}
        makePassword={makePassword}
        getPassword={getPassword}
      />
    </>
  );
};

export default UnlockWalletPresenter;
export { UnlockWalletPresenter };
