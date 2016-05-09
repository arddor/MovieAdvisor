const UPDATEGENRE = 'movieadvisor/searchbar/updateGenre';
const UPDATEKEYWORD = 'movieadvisor/searchbar/updateKeyword';
const UPDATEACTOR = 'movieadvisor/searchbar/updateActor';

import apiConfig from './MovieDBConfig'
import TmdbApi from 'moviedb-api';

var api = new TmdbApi({
  consume: false,
  apiKey: apiConfig.apiKey
});

const initialState = {
  genres: [],
  keywords: [],
  actors: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATEGENRE:
      return {
        ...state,
        genres: [...state.genres, action.payload]
      };

    case UPDATEKEYWORD:
      return {
        ...state,
        keywords: [...state.keywords, action.payload]
      };

    case UPDATEACTOR:
      return {
        ...state,
        actors: [...state.actors, action.payload]
      };

    default:
      return state;
  }
}

export function updateGenre(genre) {
  return {type: UPDATEGENRE, payload: genre};
}

export function updateKeyword(keyword) {
  return {type: UPDATEKEYWORD, payload: keyword};
}

export function updateActor(actor) {
  return {type: UPDATEACTOR, payload: actor};
}
