import React from 'react';

import { Box } from '@material-ui/core';

import { TabPanelProps } from './TabPanel';

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
export { TabPanel };
