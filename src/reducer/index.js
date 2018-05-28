import { combineReducers } from 'redux';

import mainReducer from 'reducer/mainDuck';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
