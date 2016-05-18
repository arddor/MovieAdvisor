import {discoverWithVideo} from '../../utils/api';

const CHANGEMETADATA = 'movieadvisor/searchbar/changemetadata';
const NEXT = 'movieadvisor/searchbar/next';
const PREVIOUS = 'movieadvisor/searchbar/previous';

const initialState = {
  page: 0,
  results: [],
  total_results: 0,
  total_pages: 0,
  index: 0
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
      if (state.index < 19){
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


export function search(genres, keywords, actors, minYear, maxYear){
  return dispatch => {
    discoverWithVideo(genres, keywords, actors, minYear, maxYear)
      .then(res => dispatch(changePlaylist(res)))
      .catch(err => console.log(err));
  }
}
