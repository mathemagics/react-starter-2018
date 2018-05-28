// Import modules ==============================================================
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
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

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../../reducer', () => {
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
