import { createStore, applyMiddleware, compose } from 'redux';
import {browserHistory} from 'react-router';
import {syncHistory} from 'redux-simple-router';
import reducers from './reducers';
import thunk from 'redux-thunk';

const reduxRouterMiddleware = syncHistory(browserHistory);
let middleware = [reduxRouterMiddleware, thunk];

let finalCreateStore;

if (process.env.NODE_ENV === 'production'){
  finalCreateStore = applyMiddleware(...middleware)(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)
}


export default finalCreateStore(reducers);
