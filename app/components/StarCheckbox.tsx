import React from 'react';

import { Checkbox } from '@material-ui/core';

import { StarIcon, StarOutlineIcon } from './icons';

const StarCheckbox = (...props) => (
  <Checkbox checkedIcon={<StarIcon />} icon={<StarOutlineIcon />} {...props} />
);

export default StarCheckbox;
