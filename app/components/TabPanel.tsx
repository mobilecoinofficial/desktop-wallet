import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

interface TabPanelProps {
  panels: FC[];
  selectedTabIndex: number;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { panels, selectedTabIndex } = props;

  const Panel = panels[selectedTabIndex];
  return (
    <Box margin="auto">
      <Panel />
    </Box>
  );
};

export default TabPanel;
