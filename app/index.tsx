/* eslint-disable @typescript-eslint/no-var-requires */
import React, { Fragment } from 'react';

import { ipcRenderer } from 'electron';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

import i18n from './i18n';

import './app.global.css';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

ipcRenderer.sendSync('get-initial-translations');

ipcRenderer.on('language-changed', (_, message) => {
  if (!i18n.hasResourceBundle(message.language, message.namespace)) {
    i18n.addResourceBundle(message.language, message.namespace, message.resource);
  }

  i18n.changeLanguage(message.language);
});

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line global-require
  const App = require('./App.tsx').default;

  render(
    // <I18nextProvider i18n={ i18n } >
    <AppContainer>
      {/* <I18nextProvider i18n={ i18n } initialI18nStore={ initialI18nStore } initialLanguage="el"> */}
      <App />
      {/* </I18nextProvider> */}
    </AppContainer>,
    // </I18nextProvider>,
    document.getElementById('root')
  );
});
