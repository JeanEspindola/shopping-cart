/*
* Index
*
* Where the application is bootstrapped with the provider.
* It dispatch the cart list load as the application starts to run.
*
* */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store/configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { loadCartList } from './actions/cartListAction';

const store = configureStore();

store.dispatch(loadCartList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
