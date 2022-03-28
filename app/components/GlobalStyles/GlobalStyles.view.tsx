import type { FC } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '#root': {
        height: '100%',
        width: '100%',
      },
      '*': {
        boxSizing: 'border-box',
        fontFamily: 'Lucida Console, Monaco, monospace',
        margin: 0,
        padding: 0,
      },
      body: {
        height: '100%',
        width: '100%',
      },
      html: {
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-font-smoothing': 'antialiased',
        height: '100%',
        width: '100%',
      },
    },
  })
);

export const GlobalStyles: FC = () => {
  useStyles();
  return null;
};
