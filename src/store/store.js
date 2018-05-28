import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

// Build the middleware for intercepting and dispatching navigation actions

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ reducer, history }) => {
  const middleware = routerMiddleware(history);

  return createStore(
    combineReducers({ ...reducer }),
    composeEnhancers(applyMiddleware(middleware, thunk)),
  );
};

