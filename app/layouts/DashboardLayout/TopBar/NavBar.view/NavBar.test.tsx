import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../../testUtils/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

import { KeyIcon, LockIcon, ToolsIcon } from '../../../../components/icons';
import { NavBar } from './NavBar.view';

const sections = [
  {
    Icon: LockIcon,
    label: 'Lock',
    path: '/lock',
  },
  {
    Icon: KeyIcon,
    label: 'Key',
    path: '/key',
  },
  {
    Icon: ToolsIcon,
    label: 'Tools',
    path: '/tools',
  },
];

describe('NavBar', () => {
  test('Displays correct list', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/test']} initialIndex={0}>
        <NavBar sections={sections} />
      </MemoryRouter>
    );

    expect(getByText('Lock')).toBeInTheDocument();
    expect(getByText('Key')).toBeInTheDocument();
    expect(getByText('Tools')).toBeInTheDocument();
  });
});
