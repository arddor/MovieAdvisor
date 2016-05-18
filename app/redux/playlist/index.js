import {discover, getDetails} from '../../utils/api';

const CHANGEMETADATA = 'movieadvisor/searchbar/changemetadata';
const NEXT = 'movieadvisor/searchbar/next';
const PREVIOUS = 'movieadvisor/searchbar/previous';
const SETMOVIE = 'movieadvisor/searchbar/setmovie';

const initialState = {
  page: 0,
  total_pages: 0,
  results: [],
  total_results: 0,
  index: 0,
  currentMovie: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGEMETADATA:
      let {page, results, total_results, total_pages} = action.payload;
      return {
        page,
        results,
        total_results,
        total_pages,
        index: 0
      };

    case NEXT:
      if (state.index < state.results.length){
        return {
          ...state,
          index: state.index + 1
        };
      } else {
        return state;
      }

    case PREVIOUS:
      if (state.index > 0){
        return {
          ...state,
          index: state.index -1
        }
      } else {
        return state;
      }

    case SETMOVIE:
      return {
        ...state,
        currentMovie: action.payload
      };

    default:
      return state;
  }
}

export function next(){
  return {type: NEXT}
}

export function previous(){
  return {type: PREVIOUS}
}

export function changePlaylist(list) {
  return {type: CHANGEMETADATA, payload: list};
}

export function changeMovie(details){
  return {type: SETMOVIE, payload: details};
}

export function movieDetail(id){
  return dispatch => {
    getDetails(id)
      .then(res => dispatch(changeMovie(res)))
      .catch(err => {
        console.log(err);
        dispatch(changeMovie(null));
      })
  }
}

export function search(genres, keywords, actors, minYear, maxYear){
  return dispatch => {
    discover(genres, keywords, actors, minYear, maxYear)
      .then(res => {
        dispatch(changePlaylist(res));
        let {results} = res;
        if(results.length > 0) {
          let {id} = results[0];
          dispatch(movieDetail(results[0].id));
        }
      })
      .catch(err => console.log(err));
  }
}
