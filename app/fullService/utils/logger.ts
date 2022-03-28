import { ipcRenderer } from 'electron';

export const logger = (msg: string, lvl = 'INFO'): void =>
  ipcRenderer.send('logger', JSON.stringify({ lvl, msg }));
