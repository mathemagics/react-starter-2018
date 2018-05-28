import createHistory from 'history/createBrowserHistory';
import createStore from 'store';

import renderApp from 'component/root';
import reducer from 'reducer';

const history = createHistory();

const store = createStore({
  reducer,
  history,
});

if (module.hot) {
  module.hot.accept('./reducer', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('reducer');
    store.replaceReducer(nextRootReducer);
  });
}

renderApp({ store, history });
