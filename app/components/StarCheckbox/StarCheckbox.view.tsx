import React from 'react';
import type { FC } from 'react';

import { Checkbox } from '@material-ui/core';

import { StarIcon, StarOutlineIcon } from '../icons';
import type { StarCheckboxProps } from './StarCheckbox.d';

const StarCheckbox: FC<StarCheckboxProps> = ({ field }: StarCheckboxProps) => (
  <Checkbox checkedIcon={<StarIcon />} icon={<StarOutlineIcon />} {...field} />
);

export default StarCheckbox;
export { StarCheckbox };
