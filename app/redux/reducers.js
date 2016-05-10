import { combineReducers } from 'redux';
import hotOrNot from '../components/hotOrNot/HotOrNotDucks.js';
import search from '../components/searchbar/MovieSelectDucks.js';
import playlist from './playlist';

const rootReducer = combineReducers({
  hotOrNot,
  search,
  playlist
});


export default rootReducer;
