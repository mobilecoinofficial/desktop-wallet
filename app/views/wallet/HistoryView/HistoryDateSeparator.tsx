import React from 'react';
import type { FC } from 'react';

import { Typography } from '@material-ui/core';

import { dateToMonthName } from '../../../utils/dateFunctions';

export interface HistoryDateSeparatorItemProps {
  dateTime: Date;
}

// TO DO: Avoid using &nbsp; below

const HistoryDateSeparator: FC<HistoryDateSeparatorItemProps> = ({
  dateTime,
}: HistoryDateSeparatorItemProps) => (
  <Typography variant="body2" color="textPrimary">
    &nbsp;&nbsp;&nbsp;
    <b>
      {dateToMonthName(dateTime).toLocaleUpperCase()} {dateTime.getFullYear()}
    </b>
  </Typography>
);

export default HistoryDateSeparator;
