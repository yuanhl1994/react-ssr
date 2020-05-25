import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../store';

import App from './components/App';
const store = createStore(
  window.REDUX_DATA
);

// eslint-disable-next-line
ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <App />
  </BrowserRouter></Provider>, document.getElementById('app'));
