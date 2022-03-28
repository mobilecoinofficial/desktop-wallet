import React, { FC } from 'react';

import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
import { SettingsOptionsItemProps } from './SettingsOptionsItem';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  cardArea: {
    height: 8 * 20,
  },
  root: {},
}));

export const SettingsOptionsItem: FC<SettingsOptionsItemProps> = ({
  Icon,
  label,
  path,
  handleOnClick,
}: SettingsOptionsItemProps) => {
  const classes = useStyles();
  const { t } = useTranslation('SettingsOptionsItem');

  return (
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardActionArea
          name="card-action"
          onClick={() => handleOnClick(path)}
          className={classes.cardArea}
        >
          <CardContent>
            <Icon height={34} width={34} />
            <Typography variant="body2" color="textSecondary" component="p">
              {t(label)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
