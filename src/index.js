import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App.jsx';
import * as reducers from './reducers';

let app = combineReducers(reducers);
let store = createStore(app);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root'));
