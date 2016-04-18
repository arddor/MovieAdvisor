import { createStore, applyMiddleware, compose  } from 'redux';
import {browserHistory} from 'react-router';
import {syncHistory} from 'redux-simple-router';
import reducers from './reducers';
import thunk from 'redux-thunk';

import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';

const reducer = storage.reducer(reducers);
const engine = createEngine('movieadvisor');
const storageMiddleware = storage.createMiddleware(engine);

const reduxRouterMiddleware = syncHistory(browserHistory);
let middleware = [reduxRouterMiddleware, thunk, storageMiddleware];

let finalCreateStore;
if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(...middleware)(createStore)(reducer, {});
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(reducer, {});
}

const load = storage.createLoader(engine);
load(finalCreateStore).then(() => console.log('[storage] loaded')).catch((e)   => console.log(e));

export default finalCreateStore;
