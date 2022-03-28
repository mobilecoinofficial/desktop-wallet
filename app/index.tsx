/* eslint-disable @typescript-eslint/no-var-requires */
import React, { Fragment } from 'react';

import { ipcRenderer } from 'electron';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { HotConnectedApp } from './App';
import i18n from './i18n';
import './app.global.css';
import { store } from './redux/store';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

ipcRenderer.sendSync('get-initial-translations');

ipcRenderer.on('language-changed', (_, message) => {
  if (!i18n.hasResourceBundle(message.language, message.namespace)) {
    i18n.addResourceBundle(message.language, message.namespace, message.resource);
  }

  i18n.changeLanguage(message.language);
});

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <HotConnectedApp />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
});
