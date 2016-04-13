import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import hello from '../components/hello/HelloDucks';

const rootReducer = combineReducers({
  routing: routeReducer,
  hello
}); 

export default rootReducer;
