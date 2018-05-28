// Import modules ==============================================================
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';

// Import components ===========================================================
import HomeView from 'component/view/HomeView';

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

const App = ({ store }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/home" component={HomeView} />
      </Switch>
    </Provider>
  </ThemeProvider>
);

export default hot(module)(App);
