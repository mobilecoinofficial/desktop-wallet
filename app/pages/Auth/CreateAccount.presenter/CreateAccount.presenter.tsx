import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import {
  CreateAccountView,
  createAccountFormOnSubmit,
} from '../CreateAccount.view/CreateAccount.view';

export interface CreateAccountViewProps {
  isTest?: boolean;
}

const CreateAccountPresenter: FC<CreateAccountViewProps> = ({ isTest }: CreateAccountViewProps) => {
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
      <CreateAccountView isTest={isTest} onSubmit={createAccountFormOnSubmit} />
    </>
  );
};

CreateAccountPresenter.defaultProps = {
  isTest: false,
};

export default CreateAccountPresenter;
export { CreateAccountPresenter };
