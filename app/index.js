import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import App from './app';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from 'font-awesome/css/font-awesome.min.css';
import reactselect from 'react-select/dist/react-select.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
