import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './AppRoot';

export default ({ store, history }) => {
  ReactDOM.render(
    <ConnectedRouter history={history} store={store}>
      <App store={store} />
    </ConnectedRouter>,
    document.getElementById('app'),
  );
};
