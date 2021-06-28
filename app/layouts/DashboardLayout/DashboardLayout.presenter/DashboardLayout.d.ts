import { ReactNode } from 'react';

export interface DashboardLayoutProps {
  children?: ReactNode;
  onClose: () => void;
}
