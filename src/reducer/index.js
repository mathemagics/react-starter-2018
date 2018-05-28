import mainReducer from 'reducer/mainDuck';
import { routerReducer } from 'react-router-redux';

const rootReducer = {
  main: mainReducer,
  router: routerReducer,
};

export default rootReducer;
