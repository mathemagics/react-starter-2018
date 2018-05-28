// Import modules ==============================================================
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';

// Import components ===========================================================
import HomeView from 'component/view/HomeView';

// Import config ===============================================================
import reducers from 'reducer';

// Import styles ================================================================
import './globalStyles';

// TODO set a default theme
const theme = {
  body: 'onyx',
  heading: 'black',
  caption: 'darkGrey',
  footer: 'blue',
  background: '#fff',
};

const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = [
  routerMiddleware(history),
  thunk,
];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  applyMiddleware(middleware),
  composeEnhancers(),
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../../reducer', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('reducer');
    store.replaceReducer(nextRootReducer);
  });
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/home" component={HomeView} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
);

export default hot(module)(App);
