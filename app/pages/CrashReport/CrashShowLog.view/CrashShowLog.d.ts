export interface CrashShowLogProps {
  errorLog: string;
  onClose: () => void;
  onSendReport: (st: string) => void;
}
