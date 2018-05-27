import { combineReducers } from 'redux';

import mainReducer from 'reducer';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
