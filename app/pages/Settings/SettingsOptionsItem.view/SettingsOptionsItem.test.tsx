import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import userEvent from '@testing-library/user-event';

import { LockIcon } from '../../../components/icons';
import { SettingsOptionsItem } from './SettingsOptionsItem.view';

describe('SettingsOptionsItem', () => {
  const handleOnClick = jest.fn();
  const CHANGE_PASSWORD = 'changePassword';

  test('Displays correct option item', () => {
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

  test('Click works', () => {
    const { container } = render(
      <SettingsOptionsItem
        Icon={LockIcon}
        label="changePassword"
        path={CHANGE_PASSWORD}
        handleOnClick={handleOnClick}
      />
    );

    const card = container.querySelector('[name="card-action"]') as HTMLInputElement;
    userEvent.click(card);
    expect(handleOnClick).toHaveBeenCalled();
  });
});
