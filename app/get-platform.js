import { platform } from 'os';

export default () => {
  switch (platform()) {
    case 'aix':
    case 'freebsd':
    case 'linux':
    case 'openbsd':
    case 'android':
      return 'linux';
    case 'darwin':
      return 'mac';
    case 'sunos':
      return 'mac';
    case 'win32':
      return 'win';
    default:
      return '';
  }
};
