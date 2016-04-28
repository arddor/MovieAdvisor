import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import hotOrNot from '../components/hotOrNot/HotOrNotDucks.js';
import search from '../components/searchbar/MovieSelectDucks.js';

const rootReducer = combineReducers({
  routing: routeReducer,
  hotOrNot,
  search
});


export default rootReducer;
