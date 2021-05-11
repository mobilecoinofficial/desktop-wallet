import { FC } from 'react';

export interface TabPanelProps {
  panels: FC[];
  selectedTabIndex: number;
}
