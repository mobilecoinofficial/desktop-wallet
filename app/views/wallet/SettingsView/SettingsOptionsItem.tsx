import React from 'react';
import type { FC } from 'react';

import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import { IconProps } from '../../../components/icons/IconProps';
import type { Theme } from '../../../theme';

export interface SettingsOptionsItemProps {
  Icon: FC<IconProps>;
  label: string;
  path: string;
}

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

const SettingsOptionsItem: FC<SettingsOptionsItemProps> = ({
  Icon,
  label,
  path,
}: SettingsOptionsItemProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation('SettingsOptionsItem');

  const handleOnClick = () => {
    history.push(path);
  };

  return (
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleOnClick} className={classes.cardArea}>
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

export default SettingsOptionsItem;
