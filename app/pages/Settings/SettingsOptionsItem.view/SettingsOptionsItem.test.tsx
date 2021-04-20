import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { LockIcon } from '../../../components/icons';
import routePaths from '../../../constants/routePaths';
import SettingsOptionsItem from './SettingsOptionsItem.view';

describe('SettingsOptionsItem', () => {
  test('Displays correct option item', () => {
    const { getByText } = render(
      <SettingsOptionsItem
        Icon={LockIcon}
        label="changePassword"
        path={routePaths.APP_SETTINGS_CHANGE_PASSWORD}
      />
    );

    expect(getByText('Change Passphrase')).toBeInTheDocument();
  });
});
