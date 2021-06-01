import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { createAccount } from '../../../services';
import { setKeychainAccount } from '../../../utils/keytarService';
import { CreateAccountView } from '../CreateAccount.view/CreateAccount.view';

const CreateAccountPresenter: FC = () => {
  const { t } = useTranslation('CreateAccountView');

  return (
    <>
      <Typography color="textPrimary" variant="h2" paragraph>
        {t('title')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('header')}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {t('description')}
      </Typography>
      <CreateAccountView createAccount={createAccount} setKeychainAccount={setKeychainAccount} />
    </>
  );
};

export default CreateAccountPresenter;
export { CreateAccountPresenter };
