import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import hotOrNot from '../components/hotOrNot/HotOrNotDucks.js';

const rootReducer = combineReducers({
  routing: routeReducer,
  hotOrNot
});


export default rootReducer;
