import React from 'react';
import {Provider} from 'react-redux';
import {Switch, Route } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import { hot } from 'react-hot-loader';

// Import components ===========================================================

// Import config ===============================================================

const theme = {
  body: 'onyx',
  heading: 'black',
  caption: 'darkGrey',
  footer: 'blue',
  background: '#fff',
};

const App = () => (
  <div>
    <p>React here!</p>
  </div>
);

export default hot(module)(App);
