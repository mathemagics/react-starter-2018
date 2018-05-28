import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './AppRoot';

const appRoot = document.getElementById('app');

export default ({ store, history }) => {
  ReactDOM.render(
    <ConnectedRouter history={history} store={store}>
      <App store={store} />
    </ConnectedRouter>,
    appRoot,
  );
};
