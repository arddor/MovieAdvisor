import { combineReducers } from 'redux';
import hotOrNot from '../components/hotOrNot/HotOrNotDucks.js';
import search from '../components/searchbar/MovieSelectDucks.js';

const rootReducer = combineReducers({
  hotOrNot,
  search
});


export default rootReducer;
