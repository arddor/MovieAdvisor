import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';

import store from './redux/store';
import routes from './routes';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes(store)}
    </Router>
  </Provider>, document.getElementById('root')
);
