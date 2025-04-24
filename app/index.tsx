import React from 'react';

import { ipcRenderer } from 'electron';
import ReactDOM from 'react-dom';

import App from './App';
import i18n from './i18n';

import './app.global.css';

// i18n wiring
ipcRenderer.sendSync('get-initial-translations');
ipcRenderer.on('language-changed', (_, message) => {
  if (!i18n.hasResourceBundle(message.language, message.namespace)) {
    i18n.addResourceBundle(message.language, message.namespace, message.resource);
  }
  i18n.changeLanguage(message.language);
});

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);

  // HMR hook (this is **critical** for react-refresh to fully apply)
  if (module.hot) {
    module.hot.accept('./App', () => {
      // eslint-disable-next-line global-require
      const NextApp = require('./App').default;
      ReactDOM.render(<NextApp />, root);
    });
  }
});
