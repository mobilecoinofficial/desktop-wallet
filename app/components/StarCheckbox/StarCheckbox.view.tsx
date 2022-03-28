import React, { FC } from 'react';

import { Checkbox } from '@material-ui/core';

import { StarIcon, StarOutlineIcon } from '../icons';
import type { StarCheckboxProps } from './StarCheckbox.d';

export const StarCheckbox: FC<StarCheckboxProps> = ({ field }: StarCheckboxProps) => (
  <Checkbox checkedIcon={<StarIcon />} icon={<StarOutlineIcon />} {...field} />
);
