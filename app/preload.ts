import { contextBridge, ipcRenderer } from 'electron';

console.log('preload.ts');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel, ...args) => ipcRenderer.send(channel, ...args),
    on: (channel, func) => ipcRenderer.on(channel, (_, ...args) => func(...args)),
    invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
    removeListener: (channel, listener) => ipcRenderer.removeListener(channel, listener),
    removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
  },
  require: (module) => {
    // Be careful - only allow specific modules to be required
    const allowedModules = ['electron'];
    if (allowedModules.includes(module)) {
      return require(module);
    }
    throw new Error(`Module ${module} is not allowed to be required`);
  }
});