import React from 'react';
import type { FC } from 'react';

import { Checkbox } from '@material-ui/core';

import { StarIcon, StarOutlineIcon } from './icons';

interface StarCheckboxProps {
  formik?: unknown;
}

const StarCheckbox: FC<StarCheckboxProps> = (formik) => (
  <Checkbox
    checkedIcon={<StarIcon />}
    icon={<StarOutlineIcon />}
    {...formik?.field}
    {...formik?.props}
  />
);

StarCheckbox.defaultProps = {
  formik: {},
};

export default StarCheckbox;
