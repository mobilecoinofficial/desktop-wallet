import { ipcRenderer } from 'electron';

const logger = (msg: string, lvl = 'INFO'): void =>
  ipcRenderer.send('logger', JSON.stringify({ lvl, msg }));

export default logger;
export { logger };
