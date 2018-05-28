import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import mainReducer from 'reducer/mainDuck';

const rootReducer = combineReducers({
  main: mainReducer,
  router: routerReducer,
});

export default rootReducer;
