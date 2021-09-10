import { ReactNode } from 'react';

export interface SubmitButtonProps {
  buttonClass?: string;
  disabled?: boolean;
  isSubmitting?: boolean;
  children?: ReactNode;
  onClick: () => void;
  testID?: string;
}
