import React from 'react';
import type { FC } from 'react';

import { Grid } from '@material-ui/core';

import type { SettingsOptionsItemProps } from './SettingsOptionsItem';
import SettingsOptionsItem from './SettingsOptionsItem';

export interface SettingsOptionsListProps {
  settingOptionsList: SettingsOptionsItemProps[];
}

const SettingsOptionsList: FC<SettingsOptionsListProps> = ({
  settingOptionsList,
}: SettingsOptionsListProps) => (
  <Grid container spacing={2}>
    <Grid item sm={12}>
      <Grid container justify="center" spacing={3}>
        {settingOptionsList.map(({ Icon, label, path }) => (
          <SettingsOptionsItem Icon={Icon} key={label} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default SettingsOptionsList;
