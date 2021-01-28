import React, { Fragment } from 'react';

import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

import './app.global.css';
import './i18n';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line global-require
  const App = require('./App.tsx').default;

  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
});
