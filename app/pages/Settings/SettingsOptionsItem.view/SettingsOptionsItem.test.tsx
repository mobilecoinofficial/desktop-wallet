import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { LockIcon } from '../../../components/icons';
import { SettingsOptionsItem } from './SettingsOptionsItem.view';

describe('SettingsOptionsItem', () => {
  test('Displays correct option item', () => {
    const handleOnClick = jest.fn();
    const CHANGE_PASSWORD = 'changePassword';
    const { getByText } = render(
      <SettingsOptionsItem
        Icon={LockIcon}
        label="changePassword"
        path={CHANGE_PASSWORD}
        handleOnClick={handleOnClick}
      />
    );

    expect(getByText('Change Passphrase')).toBeInTheDocument();
  });
});
