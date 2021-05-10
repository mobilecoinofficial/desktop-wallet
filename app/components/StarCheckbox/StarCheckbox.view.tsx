import React from 'react';
import type { FC } from 'react';

import { Checkbox } from '@material-ui/core';

import { StarIcon, StarOutlineIcon } from '../icons';

interface StarCheckboxProps {
  formik?: unknown;
}

/* eslint-disable react/destructuring-assignment */
const StarCheckbox: FC<StarCheckboxProps> = (formik) => (
  <Checkbox
    checkedIcon={<StarIcon />}
    icon={<StarOutlineIcon />}
    name="starcheckbox"
    {...formik?.field}
    {...formik?.props}
  />
);

StarCheckbox.defaultProps = {
  formik: {},
};

export default StarCheckbox;
export { StarCheckbox };
