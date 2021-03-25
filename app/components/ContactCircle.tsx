import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import { ContactIcon } from './icons';

interface ContactCircleProps {
  abbreviation?: string;
  //  color?: string;
}

const INITIALS_SIZE = 32;

const useStyles = makeStyles(() => ({
  abbreviation: {
    color: '#000',
    'font-size': `${INITIALS_SIZE / 2}px`,
    'letter-spacing': '-0.1rem',
    'line-height': 1,
    position: 'relative',
    top: `${INITIALS_SIZE / 4}px`,
  },

  circle: {
    'background-color': '#ccc',
    'border-radius': '50%',
    //    bottom: `${INITIALS_SIZE / 2 + 3}px`,
    height: `${INITIALS_SIZE}px`,
    position: 'relative',
    'text-align': 'center',
    width: `${INITIALS_SIZE}px`,
  },
}));

const ContactCircle: FC<ContactCircleProps> = ({
  /* color, */ abbreviation,
}: ContactCircleProps) => {
  const classes = useStyles();

  return abbreviation && abbreviation.length ? (
    <Box component="div" display="inline-block">
      <div className={classes.circle}>
        <span className={classes.abbreviation}>{abbreviation}</span>
      </div>
    </Box>
  ) : (
    <Box component="div" display="inline-block">
      <ContactIcon height={INITIALS_SIZE} width={INITIALS_SIZE} />
    </Box>
  );
};

ContactCircle.defaultProps = {
  abbreviation: '',
};

export default ContactCircle;
