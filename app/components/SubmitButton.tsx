import React, { ReactNode } from 'react';
import type { FC } from 'react';

import { Box, Button, CircularProgress, makeStyles } from '@material-ui/core';

interface SubmitButtonProps {
  buttonClass?: string;
  disabled: boolean;
  isSubmitting: boolean;
  children?: ReactNode;
  onClick: () => void;
  testID?: string;
}

const useStyles = makeStyles(() => ({
  buttonProgress: {
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    position: 'absolute',
    top: '50%',
  },
  root: { position: 'relative' },
}));

const SubmitButton: FC<SubmitButtonProps> = ({
  disabled,
  isSubmitting,
  children,
  onClick,
  buttonClass,
  testID,
}: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Box mt={2} className={classes.root}>
      <Button
        data-testid={testID}
        className={buttonClass}
        color="secondary"
        disabled={disabled}
        fullWidth
        onClick={onClick}
        size="large"
        variant="contained"
      >
        {children}
      </Button>
      {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
    </Box>
  );
};

SubmitButton.defaultProps = {
  buttonClass: '',
  children: '',
  testID: 'submit-button',
};

export default SubmitButton;
