import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

export interface TabPanelProps {
  panels: FC[];
  selectedTabIndex: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { panels, selectedTabIndex } = props;

  const Panel = panels[selectedTabIndex];
  return (
    <Box p={3}>
      <Panel />
    </Box>
  );
};

export default TabPanel;
