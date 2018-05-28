import createHistory from 'history/createBrowserHistory';
import createStore from 'store';

import renderApp from 'component/root';
import reducer from 'reducer';

const store = createStore({
  reducer,
});
const history = createHistory();

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('reducer');
    store.replaceReducer(nextRootReducer);
  });
}

renderApp({ store, history });
