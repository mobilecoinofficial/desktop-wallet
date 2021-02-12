import React, { Fragment } from 'react';

import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

import App from './App';

import './app.global.css';
import './i18n';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
});
