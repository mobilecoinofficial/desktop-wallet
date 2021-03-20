import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import { ContactIcon } from './icons';

interface ContactCircleProps {
  initials?: string;
  //  color?: string;
}

const INITIALS_SIZE = 32;

const useStyles = makeStyles(() => ({
  circle: {
    'background-color': '#ccc',
    'border-radius': '50%',
    //    bottom: `${INITIALS_SIZE / 2 + 3}px`,
    height: `${INITIALS_SIZE}px`,
    position: 'relative',
    'text-align': 'center',
    width: `${INITIALS_SIZE}px`,
  },

  initials: {
    color: '#000',
    'font-size': `${INITIALS_SIZE / 2}px`,
    'letter-spacing': '-0.1rem',
    'line-height': 1,
    position: 'relative',
    top: `${INITIALS_SIZE / 4}px`,
  },
}));

const ContactCircle: FC<ContactCircleProps> = ({ /* color, */ initials }: ContactCircleProps) => {
  const classes = useStyles();

  return initials && initials.length ? (
    <Box component="div" display="inline-block">
      <div className={classes.circle}>
        <span className={classes.initials}>{initials}</span>
      </div>
    </Box>
  ) : (
    <Box component="div" display="inline-block">
      <ContactIcon height={INITIALS_SIZE} width={INITIALS_SIZE} />
    </Box>
  );
};

ContactCircle.defaultProps = {
  initials: '',
};

export default ContactCircle;
