import React from 'react';
import type { FC } from 'react';

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { MOBIcon, TrashcanIcon } from '../../../../components/icons';
import { Theme } from '../../../../theme';
import type { AccountItemProps } from './AccountItem';

const useStyles = makeStyles((theme: Theme) => ({
  action: { margin: 'unset' },
  card: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
  },
  internal: {
    display: 'flex',
    flexDirection: 'row',
  },
  negative: {
    color: theme.palette.number?.negative || '#FF0000',
    fontWeight: 'bold',
  },
  root: {},
  textSmallRight: { fontSize: 'small', textAlign: 'right' },
}));

const AccountItem: FC<AccountItemProps> = ({
  account,
  onClick,
  onDelete,
  selected,
}: AccountItemProps) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick}>
          <CardHeader
            avatar={
              <Avatar style={{ backgroundColor: '#757575' }}>
                <MOBIcon color={selected ? 'blue' : 'white'} />
              </Avatar>
            }
            title={account.name ?? 'Unnamed'}
            subheader={`${account.accountId.substring(0, 10)}...`}
            classes={{
              action: classes.action,
            }}
          />
        </CardActionArea>
        {selected ? (
          <></>
        ) : (
          <Button onClick={onDelete}>
            <TrashcanIcon color="red" />
          </Button>
        )}
      </Card>
    </Grid>
  );
};

export default AccountItem;
export { AccountItem };
