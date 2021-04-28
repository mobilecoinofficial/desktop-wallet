import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import { KeyIcon, LockIcon, ToolsIcon } from '../../../components/icons';
import { SettingsOptionsList } from './SettingsOptionsList.view';

const handleOnClick = jest.fn();
const settingOptionsList = [
  {
    Icon: LockIcon,
    handleOnClick,
    label: 'Lock',
    path: '/lock',
  },
  {
    Icon: KeyIcon,
    handleOnClick,
    label: 'Key',
    path: '/key',
  },
  {
    Icon: ToolsIcon,
    handleOnClick,
    label: 'Tools',
    path: '/tools',
  },
];

describe('SettingsOptionsList', () => {
  test('Displays correct list', () => {
    const { getByText } = render(
      <SettingsOptionsList settingOptionsList={settingOptionsList} handleOnClick={handleOnClick} />
    );

    expect(getByText('Lock')).toBeInTheDocument();
    expect(getByText('Key')).toBeInTheDocument();
    expect(getByText('Tools')).toBeInTheDocument();
  });
});
