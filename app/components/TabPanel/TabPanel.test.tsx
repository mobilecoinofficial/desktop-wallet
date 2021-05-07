import React from 'react';

import { screen, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { TabPanel } from './TabPanel.view';

const Panel1 = () => <p>This is Panel 1</p>;
const Panel2 = () => <p>This is Panel 2</p>;

describe('TabPanel', () => {
  test('renders when called', () => {
    render(<TabPanel panels={[Panel1, Panel2]} selectedTabIndex={0} />);

    expect(screen.getByText('This is Panel 1')).toBeInTheDocument();
    expect(screen.queryByText('This is Panel 2')).not.toBeInTheDocument();
  });

  test('renders appropriate panel by index when called', () => {
    render(<TabPanel panels={[Panel1, Panel2]} selectedTabIndex={1} />);

    expect(screen.getByText('This is Panel 2')).toBeInTheDocument();
    expect(screen.queryByText('This is Panel 1')).not.toBeInTheDocument();
  });
});
